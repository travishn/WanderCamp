import React from 'react';
import { Link } from 'react-router-dom';

const ListingsIndexItem = ({ listing }) => (
    <li className="listing-index-item">
      <Link to={`/listing/${listing.id}`}>
        <img src={listing.photoIds} alt={listing.name} />
      </Link>

      <div className="listing-index-title">
        {listing.title}
      </div>

      <div className="listing-index-description">
        {listing.description.slice(0, 100)}
        <span className="trailing-dots">...</span>
      </div>
    </li>
);

export default ListingsIndexItem;