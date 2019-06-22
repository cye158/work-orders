import React from "react";
import SearchBox from "./searchBox";
import SortBox from "./sortBox";

const NavBar = ({ query, onChange, onSort, sortOptions }) => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark border-secondary">
      <SearchBox query={query} onChange={onChange} />
      <SortBox onSort={onSort} sortOptions={sortOptions} />
    </nav>
  );
};

export default NavBar;
