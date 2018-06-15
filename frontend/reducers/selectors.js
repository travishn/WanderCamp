
export const selectAllListings = (state) => Object.values(state.entities.listings);

export const selectListingPhotos = (state, listing) => {
  // The bug when u go to user profile and then hit back to the index page is because in the user profile
  // the listingPhotos are in an object that has a key of their listing_id pointing to the listingPhoto object itself
  // while in the listing index page, the key is their actually id

  // Second bug is when you navigate back from the profile page to the discover page, you also don't have all the listingPhotos
  // from the userprofile state but you do have all the listings photoIds so when it tries to iterate over the ids of a listing
  // that is not on the bookings page, it breaks because when u key into the id, it returns undefined['imgUrl']
  if (!listing) return undefined;
  
  if (listing.photoIds) {
    return listing.photoIds.map(id => state.entities.listingPhotos[id]['imgUrl']);
  } else {
    return [];
  }
};

export const selectAllPhotos = (state) => {
  let photos = {};
  let listings;

  if (Object.values(state.entities.searchedListings).length === 0) {
    listings = Object.values(state.entities.listings);
  } else {
    listings = Object.values(state.entities.searchedListings);
  }

  listings.forEach( (listing) => {
    photos[listing.id] = selectListingPhotos(state, listing);
  });

  return photos;
};

export const selectUserBookings = (state, currentUser) => {
  let selected = {};
  let bookings = Object.values(state.entities.bookings);

  if (!currentUser) return undefined;

  bookings.forEach( (booking) => {
    if (currentUser.id === booking.guestId) {
      selected[booking.id] = booking;
    }});

  return selected;
};
