import React from "react";

const SearchBox = ({onSearchChange}) => {
    console.log('Search Box');
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder="search cats"
                onChange={onSearchChange}
            />
        </div>
        
    );
}

export default SearchBox;