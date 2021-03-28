import React from 'react';

import classes from './Toolbar.module.css';
import LogoSvg from '../../assets/logo.svg';
import SearchButtons from './SearchButtons/SearchButtons';

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <img src={LogoSvg} alt="windbnb logo" className={classes.Logo}/>
            <SearchButtons />
        </header>
    )
}

export default Toolbar
