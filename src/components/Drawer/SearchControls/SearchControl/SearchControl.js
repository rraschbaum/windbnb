import React from 'react';

import classes from './SearchControl.module.css';

const SearchControl = (props) => {
    return (
        <div className={classes.SearchControl}>
            <div className={classes.Contents}>
                <div className={classes.Label}>{props.label}</div>
                <div className={classes.Input}>{props.input}</div>
            </div>
        </div>
    )
}

export default SearchControl
