import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      value={value}
      className="form-control"
      onChange={e => onChange(e.currentTarget.value)}
      placeholder="Search by Worker Name..."
    />
  );
};

export default SearchBox;
