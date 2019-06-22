import React from "react";

const SortBox = ({ onSort, sortOptions }) => {
  return (
    <select
      name="sortOptions"
      id="sortOptions"
      onChange={e => onSort(e.target.value)}
      className="col form-control"
    >
      <option className="text-muted" value="">
        Sort By: Date
      </option>
      {sortOptions.map(option => (
        <option key={sortOptions.indexOf(option)} value={option.type}>
          Date: {option.name}
        </option>
      ))}
    </select>
  );
};

export default SortBox;
