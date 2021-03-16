import React from 'react'
import Listing from './Listing/Listing'

const Listings = (props) => props.listings.map((listing) => {
    return <Listing 
        className='listings'
        photo={listing.photo}
        type={listing.type}
        beds={listing.beds}
        rating={listing.rating}
        title={listing.title} />
})


export default Listings