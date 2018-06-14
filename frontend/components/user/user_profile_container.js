import { connect } from 'react-redux';
import { fetchUserBookings, deleteUserBooking } from '../../actions/booking_actions';
import { clearPhotos } from '../../actions/listing_actions';
import UserProfile from './user_profile';
import {
  withRouter
} from 'react-router';

export const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id] || {};
  const bookings = state.entities.bookings;
  const listingPhotos = state.entities.listingPhotos;
  const currentDate = new Date().toJSON().slice(0, 10);
  const currentDateSum = parseInt(currentDate.slice(0, 4)) +
    parseInt(currentDate.slice(5, 7)) +
    parseInt(currentDate.slice(8, 10));

  return {
    currentUser,
    bookings,
    listingPhotos,
    currentDateSum
  };
};

export const mapDispatchToProps = (dispatch) => ({
  fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId)),
  deleteUserBooking: (bookingId) => dispatch(deleteUserBooking(bookingId)),
  clearPhotos:() => dispatch(clearPhotos())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));