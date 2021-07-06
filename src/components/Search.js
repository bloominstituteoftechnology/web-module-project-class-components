import React from "react";

const Search = (props) => {
  return (
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="search"
            id="header-search"
            placeholder={props}
            name="s"
            onChange={props.handleChange} 
        />
        <button type="submit">Search</button>
    </form>
  );
};

export default Search;