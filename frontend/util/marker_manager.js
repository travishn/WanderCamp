class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromListing(listing) {
    const marker = new google.maps.Marker({
      position: {lat: listing.lat, lng: listing.lon},
      map: this.map,
      listingId: listing.id
    });

    this.markers[marker.listingId] = marker;
  }

  updateMarkers(listings) {
    // Instantiate an obj that holds all of the filtered listings (passed from listings map)
    const listingsObject = {};
    listings.forEach( listing => listingsObject[listing.id] = listing);

    //Check whether any new filtered listings have a marker or not - if not, create one for them
    listings.filter( listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing));

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