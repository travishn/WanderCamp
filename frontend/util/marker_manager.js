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
    // const listingsObject = {};
    // listings.forEach( listing => listingsObject[listing.id] = listing);

    listings.filter( listing => !this.markers[listing.id])
      .forEach(newListing => this.createMarkerFromListing(newListing));

    console.log(this.markers);
  }
}

export default MarkerManager;