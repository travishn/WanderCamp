import {
  RECEIVE_BOOKING_ERRORS
} from '../actions/booking_actions';
import merge from 'lodash/merge';

  const bookingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_BOOKING_ERRORS:
        return action.errors;
      default:
        return state;
  }
};

export default bookingErrorsReducer;