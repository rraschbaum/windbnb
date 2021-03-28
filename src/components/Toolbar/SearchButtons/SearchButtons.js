import React from 'react'

import SearchButton from './SearchButton/SearchButton';
import classes from './SearchButtons.module.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const SearchButtons = () => {
    return (
        <div className={classes.SearchButtons}>
            <SearchButton>Helsinki, Finland</SearchButton>
            <span></span>
            <SearchButton>Add Guests</SearchButton>
            <span></span>
            <SearchButton><SearchRoundedIcon /></SearchButton>
        </div>
    )
}

export default SearchButtons
