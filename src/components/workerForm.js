import React from "react";

const WorkerForm = ({ worker }) => {
  return (
    <div className="border rounded bg-secondary row m-1">
      <div className="border border-secondary rounded col-5 p-1 flex">
        <img
          src={worker.image}
          alt={worker.image}
          className="col rounded p-0 m-0"
          style={{
            boxShadow: "0.13rem 0.13rem 0.13rem 0.013rem rgba(33, 35, 33, 0.33)"
          }}
        />
      </div>
      <div className="col-7 p-3 align-self-center text-white">
        <p className="h5 mb-0">{worker.name}</p>
        <p className="mb-0">{worker.companyName}</p>
        <p className="small mb-0">{worker.email}</p>
      </div>
    </div>
  );
};

export default WorkerForm;
