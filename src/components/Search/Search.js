import React from 'react'
import './Search.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function Search() {
    return (
        <div className="search">
            <div className="location">Helsinki, Finland</div>
            <div className="guests">Add Guests</div>
            <SearchRoundedIcon className="search-icon"></SearchRoundedIcon>
        </div>
    )
}

export default Search
