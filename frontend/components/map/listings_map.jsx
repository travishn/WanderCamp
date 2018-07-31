import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ListingsMap extends React.Component {
  constructor(props) {
    super(props);
    this.applyFilters = this.applyFilters.bind(this);
  }

  componentDidMount() {
    const styles = [
      {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": "0"
          },
          {
            "weight": "0.33"
          },
          {
            "color": "#646464"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#969696"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
          {
            "weight": "1.69"
          },
          {
            "color": "#5f5c5c"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": "6"
          },
          {
            "weight": "1.25"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": "8"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "saturation": "-39"
          },
          {
            "gamma": "0.83"
          },
          {
            "hue": "#00cdff"
          },
          {
            "lightness": "-2"
          }
        ]
      }
    ];
    
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 12,
      styles: styles
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