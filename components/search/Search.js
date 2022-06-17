import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <div className="--form-control">
      <input
        type="text"
        placeholder="Search Coin"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
