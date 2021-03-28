import React from 'react';
import Listing from './Listing/Listing';
import classes from './Listings.module.css';

const Listings = (props) => props.listings.map((listing) => {

    

    return (
        <div className={classes.Listings}>
            <Listing 
                superHost={listing.superHost}
                photo={listing.photo}
                type={listing.type}
                beds={listing.beds}
                rating={listing.rating}
                title={listing.title} />
        </div>
    )
})


export default Listings