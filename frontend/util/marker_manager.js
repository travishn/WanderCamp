class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    // this.createMarkerFromListing = this.createMarkerFromListing.bind(this);
  }

  renderInfo(listing) {
    return (
      `<div class="infowindow">
        <h2 class="marker-title"> ${listing.title}</h2>
       </div>`
    )
  }

  createMarkerFromListing(listing) {
    const markerInfo = new google.maps.InfoWindow({
      content: this.renderInfo(listing)
    });

    const marker = new google.maps.Marker({
      position: {lat: listing.lat, lng: listing.lon},
      map: this.map,
      listingId: listing.id,
      clicked: false,
      infoWindow: markerInfo,
      icon: 'http://res.cloudinary.com/emanon/image/upload/c_scale,w_50/v1533004096/tent-marker.png',
      animation: google.maps.Animation.DROP
    });

    this.markers[marker.listingId] = marker;

    marker.addListener('mouseover', () => {
      marker.setIcon('http://res.cloudinary.com/emanon/image/upload/c_scale,w_50/v1533004396/hipcamp-pin-hover-2c17e95ab14146f407d70bc7b50ae48857dd540610180c75184f45f4db6d04d2.png');
      marker.infoWindow.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      marker.infoWindow.close(this.map, marker);
      marker.setIcon('http://res.cloudinary.com/emanon/image/upload/c_scale,w_50/v1533004096/tent-marker.png');
    });

    marker.addListener('click', () => {
      marker.clicked = !marker.clicked;

      if (marker.clicked) {
        this.hideMarkers();
        marker.infoWindow.open(this.map, marker);
        const associatedListing = document.querySelector(`ul[data-key='${listing.id}']`);
        associatedListing.scrollIntoView({behavior: "smooth"});
      } else {
        marker.infoWindow.close(this.map, marker);
      }
    });
  }

  hideMarkers() {
    Object.values(this.markers).forEach( marker => {
      marker.infoWindow.close(this.map, marker);
    });
  }

  updateMarkers(listings) {
    // Instantiate an obj that holds all of the filtered listings (passed from listings map)
    const listingsObject = {};
    listings.forEach( listing => listingsObject[listing.id] = listing);

    //Check whether any new filtered listings have a marker or not - if not, create one for them
    listings.filter( listing => !this.markers[listing.id])
      .forEach(newListing => {
        this.createMarkerFromListing(newListing)
        // window.setTimeout(() => this.createMarkerFromListing(newListing), 200);
      });

    // Filters out all the markers that are not apart of listingsObject and removes them from markers state
    Object.keys(this.markers).filter(listingId => !listingsObject[listingId])
      .forEach((listingId) => this.removeMarker(this.markers[listingId]))
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}

export default MarkerManager;