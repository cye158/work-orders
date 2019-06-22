import React, { Fragment, Component } from "react";
import NavBar from "./navBar";
import OrderForm from "./orderForm";
import WorkerForm from "./workerForm";
import DateForm from "./dateForm";
import { getOrders, getWorker } from "../services/orderService";
import { includesQuery } from "../utils/includesQuery";
import _ from "lodash";
import "./orders.css";

class Orders extends Component {
  state = {
    orders: [],
    searchQuery: "",
    sortOptions: [
      { type: "asc", name: "Earliest" },
      { type: "desc", name: "Latest" }
    ],
    sort: { type: "deadline", order: "" }
  };

  populateOrders = async () => {
    try {
      const {
        data: { orders }
      } = await getOrders();
      this.setState({ orders });

      const promises = orders.map(async order => {
        const {
          data: { worker }
        } = await getWorker(order.workerId);
        console.log(worker);
        let newOrderWorker = { ...order, worker };
        return newOrderWorker;
      });

      const newOrders = await Promise.all(promises);
      newOrders.then(this.setState({ orders: newOrders }));
    } catch (err) {}
  };

  async componentDidMount() {
    await this.populateOrders();
  }

  getPageData = () => {
    const { orders, searchQuery, sort } = this.state;

    let filteredOrders = orders;
    if (searchQuery) {
      filteredOrders = orders.filter(order =>
        includesQuery(searchQuery, order.worker.name)
      );
    }

    const sortedOrders = _.orderBy(filteredOrders, sort.type, sort.order);
    return { orders: sortedOrders };
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  handleSort = order => {
    const sort = { ...this.state.sort, order };
    this.setState({ sort });
  };

  render() {
    const { searchQuery, sortOptions } = this.state;
    const { orders } = this.getPageData();
    return (
      <Fragment>
        <NavBar
          query={searchQuery}
          onChange={this.handleSearch}
          sortOptions={sortOptions}
          onSort={this.handleSort}
        />
        <div className="orders">
          <ul className="row list-unstyled m-2 justify-content-center">
            {(orders.length === 0 && <h4>No orders found...</h4>) ||
              orders.map(
                order =>
                  order.worker && (
                    <li
                      key={order.id}
                      className="container col-10 col-sm-5 col-md-3 m-2 p-3 order border rounded bg-light"
                    >
                      <OrderForm order={order} />
                      <WorkerForm worker={order.worker} />
                      <DateForm epochTime={order.deadline} />
                    </li>
                  )
              )}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Orders;
