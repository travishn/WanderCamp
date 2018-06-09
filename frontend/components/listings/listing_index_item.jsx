import React from 'react';
import { Link } from 'react-router-dom';

const ListingsIndexItem = ({ listing, photos }) => {
  return (
    <li className="listing-index-item">
      <img src={photos[listing.id][0]} alt={listing.name} />

      <div className="listing-index-title">
        {listing.title}
      </div>

      <div className="listing-index-description">
        {listing.description.slice(0, 100)}
        <span className="trailing-dots">...</span>
      </div>
    </li>
  );
};

export default ListingsIndexItem;