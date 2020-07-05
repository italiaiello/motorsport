import React from 'react'

const SearchBar = ({ onSearchChange }) => {
    return (
        <article id="searchBarContainer">
            <input  id="searchBar" 
                    className="formInput"
                    type="text" 
                    placeholder="Enter a league..." 
                    onChange={onSearchChange} 
            />
        </article>
    )
}

export default SearchBar