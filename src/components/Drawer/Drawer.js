import React from 'react';

import classes from './Drawer.module.css';
import LocationFilter from './LocationFilter/LocationFilter';
import GuestsFilter from './GuestsFilter/GuestsFilter';
import SearchControls from './SearchControls/SearchControls';

const Drawer = () => {
    return (
        <div className={classes.Drawer}>
            <div className={classes.Container}>
                <SearchControls />
                <LocationFilter />
                <GuestsFilter />
            </div>
        </div>
    )
}

export default Drawer


