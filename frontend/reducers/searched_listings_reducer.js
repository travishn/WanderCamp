import {
  RECEIVE_SEARCH_LISTINGS,
} from '../actions/listing_actions';
import merge from 'lodash/merge';


const searchedListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_SEARCH_LISTINGS:
      return merge({}, state, action.payload.listings);
    default:
      return state;
  }
};

export default searchedListingsReducer;