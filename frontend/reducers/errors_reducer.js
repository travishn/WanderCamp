import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import bookingErrorsReducer from './booking_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  booking: bookingErrorsReducer,
  review: reviewErrorsReducer
});

export default errorsReducer;