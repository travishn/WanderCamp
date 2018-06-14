import * as ListingAPIUtil from '../util/listing_api_util';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_SEARCH_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

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



