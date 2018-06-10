import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
        return merge({}, state, {[action.currentUser.id]: action.currentUser});
      // return merge({}, state, action.payload.users);
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_LISTING:
      return merge({}, state, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;