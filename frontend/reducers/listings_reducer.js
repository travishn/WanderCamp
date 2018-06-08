import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
import merge from 'lodash/merge';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING:
      return merge({}, state, {[action.listing.id]: action.listing})
    case RECEIVE_LISTINGS:
      return action.listings;
    default:
      return state;
  }
};

export default listingsReducer;