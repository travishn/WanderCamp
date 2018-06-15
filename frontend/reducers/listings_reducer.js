import { RECEIVE_LISTINGS, 
  RECEIVE_LISTING, 
  CLEAR_LISTINGS 
} from '../actions/listing_actions';
import merge from 'lodash/merge';
import { RECEIVE_USER_BOOKINGS } from '../actions/booking_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING:
      return merge({}, state, action.payload.listing);
    case RECEIVE_LISTINGS:
      return action.payload.listings;
    case CLEAR_LISTINGS:
      return {};
    case RECEIVE_USER_BOOKINGS:
      return {};
    default:
      return state;
  }
};

export default listingsReducer;