import React, { Fragment, Component } from "react";
import OrderForm from "./orderForm";
import Workers from "./workers";
import SearchBox from "./searchBox";
import api from "../services/orderService";
import _ from "lodash";

class Orders extends Component {
  state = {
    orders: [],
    workers: [],
    searchQuery: "",
    sort: { order: "asc" }
  };

  populateOrders = async () => {
    const {
      data: { orders }
    } = await api.getOrders();
    this.setState({ orders });
  };

  populateWorkers = async () => {
    const ids = _.uniq(this.state.orders.map(order => order.workerId));
    const promises = ids.map(async id => {
      const {
        data: { worker }
      } = await api.getWorker(id);
      return worker;
    });
    Promise.all(promises).then(workers => this.setState({ workers }));
  };

  async componentDidMount() {
    setTimeout(1000);
    await this.populateOrders().then(async () => await this.populateWorkers());
  }

  includesQuery = (query, worker) => {
    const regex = new RegExp(query, "gi");
    return regex.test(worker);
  };

  getPageData = () => {
    const { orders: allOrders, searchQuery } = this.state;

    let filteredOrders = allOrders;
    if (searchQuery) {
      filteredOrders = allOrders.filter(order =>
        this.includesQuery(searchQuery.toLowerCase())
      );
    }

    return { orders: filteredOrders };
  };

  getWorkerInfo = id => {
    const { workers } = this.state;
    console.log(_.find(workers, { id }));
    //return _.find(workers, { id });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  handleSort = sort => {
    this.setState({ sort });
  };

  render() {
    const { orders, searchQuery, workers } = this.state;
    console.log(orders, workers);
    return (
      <div>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <Fragment>
          {orders.map(order => {
            return (
              <div key={order.id}>
                <OrderForm order={order} />
              </div>
            );
          })}
        </Fragment>
      </div>
    );
  }
}

export default Orders;
