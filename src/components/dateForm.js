import React from "react";

const DateForm = ({ epochTime }) => {
  const date = new Date(0);
  date.setUTCSeconds(epochTime);
  return (
    <p className="small mb-0 text-right small border-info border-top font-weight-light">
      {date.toUTCString()}
    </p>
  );
};

export default DateForm;
