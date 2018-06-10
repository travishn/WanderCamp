import { 
  RECEIVE_USER_BOOKINGS, 
  RECEIVE_USER_BOOKING,
  REMOVE_USER_BOOKING
} from '../actions/booking_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_BOOKINGS:
      return action.bookings;
    case RECEIVE_USER_BOOKING:
      return merge({}, state, {[action.booking.id]: action.booking});
    case REMOVE_USER_BOOKING:
      let newState = merge({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;