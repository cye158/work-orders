import React from "react";

const OrderForm = ({ order }) => {
  return (
    <div className="text-center">
      <h3>
        <b>{order.name}</b>
      </h3>

      <div className="text-left mx-5">
        <p>{order.description}</p>
      </div>
    </div>
  );
};

export default OrderForm;
