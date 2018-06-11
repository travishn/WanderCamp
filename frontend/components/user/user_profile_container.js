import { connect } from 'react-redux';
import { fetchUserBookings, deleteUserBooking } from '../../actions/booking_actions';
import UserProfile from './user_profile';
import {
  withRouter
} from 'react-router';

export const mapStateToProps = (state) => {
  // debugger;
  const currentUser = state.entities.users[state.session.id] || {};
  const bookings = state.entities.bookings;
  const bookingPhotos = state.entities.listingPhotos;

  return {
    currentUser,
    bookings,
    bookingPhotos
  };
};

export const mapDispatchToProps = (dispatch) => ({
  fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId)),
  deleteUserBooking: (bookingId) => dispatch(deleteUserBooking(bookingId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));