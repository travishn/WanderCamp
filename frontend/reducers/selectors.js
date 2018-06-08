
export const selectAllListings = (state) => Object.values(state.entities.listings);

export const selectListingPhotos = (state, listing) => {
  if (listing) return listing.photo_ids.map(id => state.entities.photos[id]);
  else return [];
};