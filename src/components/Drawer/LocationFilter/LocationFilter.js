import React from 'react';

import classes from './LocationFilter.module.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const LocationFilter = () => {
    return (
        <div className={classes.LocationFilter}>
            <div><LocationOnIcon />Helsinki, Finland</div>
            <div><LocationOnIcon />Turku, Finland</div>
            <div><LocationOnIcon />Oulu, Finland</div>
            <div><LocationOnIcon />Vaasa, Finland</div>
        </div>
    )
}

export default LocationFilter
