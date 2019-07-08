import React from "react";

const WorkerForm = ({ worker }) => {
  return (
    <div className="row m-1">
      <div className="col-5 p-2 flex">
        <img
          src={worker.image}
          alt={worker.image}
          className="col p-1 worker-image rounded-circle"
        />
      </div>
      <div className="col-7 align-self-center">
        <h5>{worker.name}</h5>
        <h6>{worker.companyName}</h6>
        <p>{worker.email}</p>
      </div>
    </div>
  );
};

export default WorkerForm;
