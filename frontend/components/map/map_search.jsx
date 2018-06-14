import React from 'react';
import ListingsIndexContainer from '../listings/listings_index_container';
import ListingsMap from './listings_map';

class MapSearch extends React.Component {

  render() {
    const { listings, fetchListings } = this.props;

    return (
      <div className="index-map-container">
        <ListingsIndexContainer /> 
        <ListingsMap listings={listings}/>
      </div>
    );
  }
}

export default MapSearch;