import React from "react";

const DateForm = ({ epochTime }) => {
  const date = new Date(0);
  date.setUTCSeconds(epochTime);
  return (
    <div className="text-right font-italic">
      <sub>{date.toUTCString()}</sub>
    </div>
  );
};

export default DateForm;
