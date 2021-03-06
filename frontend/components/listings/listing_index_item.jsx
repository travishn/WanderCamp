import React from 'react';
import { Link } from 'react-router-dom';

const ListingsIndexItem = ({ listing, photos }) => {
  
  if (Object.values(photos).length === 0) return null;
  return (
    <ul data-key={listing.id} className="listing-index-container">
      <Link to={`/listings/${listing.id}`}>
        <li className="listing-index-picture">
          <figure className="listing-index-figure">
            <img src={photos[listing.id][0]} alt={listing.name} />
          </figure>
        </li>

        <li className="listing-index-info">
          <div className="listing-index-title">
            {listing.title}
          </div>

          <div className="listing-index-description">
            {/* originally had .slice(0, 230) but broke when use direct url */}
            {listing.description.slice(0, 200)}
            <span className="trailing-dots">...</span>
          </div>
        </li>
      </Link>
    </ul>
  );
};

export default ListingsIndexItem;