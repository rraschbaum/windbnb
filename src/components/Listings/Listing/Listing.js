import React from 'react'
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import classes from './Listing.module.css';

const Listing = ( props ) => {

    const hostStyle = props.superHost ? "super-host" : "super-host-hidden";

    return (
        <div className={classes.Listing}>
            <img src={props.photo} alt="" className={classes.Photo}/>
            <div className={classes.ListingInfo}>
                <div className={classes.ListingDetails}>
                    <div className={classes.DetailsRight}>
                        <p className={hostStyle}>Super Host</p>
                        <p className={classes.Type}>{props.type}</p>
                        <p className={classes.Beds}> . {props.beds} beds</p>
                    </div>
                    <div className={classes.Rating}>
                        <StarRoundedIcon className={classes.RatingIcon} />
                        <p className={classes.RatingNumber}>{props.rating}</p>
                    </div>
                </div>
                <h2 className={classes.Title}>{props.title}</h2>
            </div>     
        </div>
    )
}

export default Listing


// import React from 'react'
// import StarRoundedIcon from '@material-ui/icons/StarRounded';
// import './Listing.css'

// const Listing = ({ listings }) => {
//     return (
//         <div>
//             {listings.map((listing) => <div className="listing">
//                 <img src={listing.photo} alt="" className="photo"/>
//                 <div className="listing-info">
//                     <div className="listing-details">
//                         <div className="details-right">
//                             <p className="super-host">Super Host</p>
//                             <p className="type">{listing.type}</p>
//                             <p className="beds"> . {listing.beds} beds</p>
//                         </div>
//                         <div className="rating">
//                             <StarRoundedIcon className="rating-icon" />
//                             <p className="rating-number">{listing.rating}</p>
//                         </div>
//                     </div>
//                     <h2 className="title">{listing.title}</h2>
//                 </div>
                
//             </div>)}

//         </div>
//     )
// }

// export default Listing
