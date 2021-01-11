import React from 'react';
import "./searchBox.css";

const SearchBox = ({placeholder,handleSearch}) => {
    return (
        <input className="searchBox" type="search" placeholder={placeholder} onChange={handleSearch}/>
    )
}

export default SearchBox
