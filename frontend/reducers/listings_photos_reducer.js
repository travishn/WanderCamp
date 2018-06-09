import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
import merge from 'lodash/merge';

const listingsPhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return merge({}, state, action.payload.listingPhotos);
    case RECEIVE_LISTING:
      return merge({}, state, action.payload.listingPhotos);
    default:
      return state;
  }
};

export default listingsPhotoReducer;