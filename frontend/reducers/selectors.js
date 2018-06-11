
export const selectAllListings = (state) => Object.values(state.entities.listings);

export const selectListingPhotos = (state, listing) => {
  // debugger;
  if (listing.photoIds) {
    return listing.photoIds.map(id => state.entities.listingPhotos[id]['imgUrl']);
  } else {
    return [];
  }
};

export const selectAllPhotos = (state) => {
  let photos = {};
  let listings = Object.values(state.entities.listings);

  listings.forEach( (listing) => {
    photos[listing.id] = selectListingPhotos(state, listing);
  });

  return photos;
};

export const selectUserBookings = (state, currentUser) => {
  let selected = {};
  let bookings = Object.values(state.entities.bookings);

  bookings.forEach( (booking) => {
    if (currentUser.id === booking.guestId) {
      selected[booking.id] = booking;
    }});

  return selected;
};
