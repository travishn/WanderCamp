import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import listingsPhotoReducer from './listings_photos_reducer';
import bookingsReducer from './bookings_reducer';
const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  listingPhotos: listingsPhotoReducer,
  bookings: bookingsReducer
});

export default entitiesReducer;