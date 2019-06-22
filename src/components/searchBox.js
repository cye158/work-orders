import React from "react";

const SearchBox = ({ query, onChange }) => {
  return (
    <div className="col-10">
      <input
        className="form-control"
        type="text"
        name="query"
        value={query}
        onChange={e => onChange(e.currentTarget.value)}
        placeholder="Search by Worker Name..."
      />
    </div>
  );
};

export default SearchBox;
