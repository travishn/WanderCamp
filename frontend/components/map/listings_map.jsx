import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {
  constructor(props) {
    super(props);
    this.applyFilters = this.applyFilters.bind(this);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 11
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions); //Wrap the map dom node in a Google Map
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
  }
  
  applyFilters(listings) {
    const { filters } = this.props;
    let filteredListings = listings;

    if (filters['camping']) filteredListings = filteredListings.filter(listing => listing.category === "camping");
    if (filters['glamping']) filteredListings = filteredListings.filter(listing => listing.category === "glamping");
    if (filters['petFriendly']) filteredListings = filteredListings.filter(listing => listing.petsAllowed === true);
    if (filters['beach']) filteredListings = filteredListings.filter(listing => listing.terrain === 'Beach');
    if (filters['mountain']) filteredListings = filteredListings.filter(listing => listing.terrain === 'Mountain');
    if (filters['forest']) filteredListings = filteredListings.filter(listing => listing.terrain === 'Forest');
    if (filters['desert']) filteredListings = filteredListings.filter(listing => listing.terrain === 'Desert');

    filteredListings = filteredListings.filter(listing => listing.price <= filters['price']);
    filteredListings = filteredListings.filter(listing => listing.capacity >= filters['capacity']);
    return filteredListings;
  }

  componentDidUpdate() {
    const filteredListings = this.applyFilters(this.props.listings);
    this.MarkerManager.updateMarkers(filteredListings);
  }

  render() {
    return (
      //The ref gives us access to the map dom node
      <div className="map" ref="map">
      </div>
    );
  }
}

export default ListingsMap;