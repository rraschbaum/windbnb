import React from 'react'

import classes from './SearchButton.module.css';

const SearchButton = (props) => {
    return (
        <button className={classes.SearchButton}>
            {props.children}
        </button>
    )
}

export default SearchButton
