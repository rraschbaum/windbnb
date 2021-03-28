import React from 'react';

import classes from './SearchControls.module.css';
import SearchControl from './SearchControl/SearchControl';

const SearchControls = () => {
    return (
        <div className={classes.SearchControls}>
            <SearchControl label="location" input="Add location"/>
            <span className={classes.Divider}></span>
            <SearchControl label="guests" input="4 guests"/>
            <span className={classes.Divider}></span>
        </div>
    )
}

export default SearchControls
