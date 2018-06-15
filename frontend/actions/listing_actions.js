import * as ListingAPIUtil from '../util/listing_api_util';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_SEARCH_LISTINGS = 'RECEIVE_SEARCH_LISTINGS';
export const CLEAR_SEARCH_LISTINGS = 'CLEAR_SEARCH_LISTINGS';
export const CLEAR_LISTINGS = 'CLEAR_LISTINGS';
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS';

export const receiveListings = (payload) => ({
  type: RECEIVE_LISTINGS,
  payload
});

export const receiveListing = (payload) => ({
  type: RECEIVE_LISTING,
  payload
});

export const receiveSearchListings = (payload) => ({
  type: RECEIVE_SEARCH_LISTINGS,
  payload
});

export const clearListings = () => ({
  type: CLEAR_LISTINGS
});

export const clearSearchListings = () => ({
  type: CLEAR_SEARCH_LISTINGS
});

export const clearPhotos = () => ({
  type: CLEAR_PHOTOS
});

export const fetchListings = () => (dispatch) => (
  ListingAPIUtil.fetchListings()
  .then( payload => dispatch(receiveListings(payload)))
);

export const fetchListing = (id) => (dispatch) => (
  ListingAPIUtil.fetchListing(id)
  .then( payload => dispatch(receiveListing(payload)))
);

export const searchListings = (search) => (dispatch) => (
  ListingAPIUtil.searchListings(search).then( payload => dispatch(receiveSearchListings(payload)))
);

export const fetchCategoryListings = () => (dispatch) => (
  ListingAPIUtil.fetchCategoryListings().then( payload => dispatch(receiveListings(payload)))
);




