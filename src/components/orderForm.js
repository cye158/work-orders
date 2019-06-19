import React from "react";

const OrderForm = ({ order }) => {
  return (
    <div>
      <h3>{order.name}</h3>
      <p>{order.description}</p>
      <p>{order.workerId}</p>
    </div>
  );
};

export default OrderForm;
