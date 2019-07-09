import React from "react";

const OrderForm = ({ order }) => {
  return (
    <div>
      <p className="h4 p-1 border rounded border-info bg-info text-white font-weight-bold text-center">
        {order.name}
      </p>

      <div className="text-left my-3 mx-4">
        <p className="text-justify mb-0 text-secondary">{order.description}</p>
      </div>
    </div>
  );
};

export default OrderForm;
