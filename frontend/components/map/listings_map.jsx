import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
  }
  
  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
  }

  

  render() {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
}

export default ListingsMap;