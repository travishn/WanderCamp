import { connect } from 'react-redux';
import { fetchUserBookings, deleteUserBooking } from '../../actions/booking_actions';
import UserProfile from './user_profile';

export const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id] || {};
  const bookings = state.entities.bookings;

  return {
    currentUser,
    bookings
  };
};

export const mapDispatchToProps = (dispatch) => ({
  fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId)),
  deleteUserBooking: (bookingId) => dispatch(deleteUserBooking(bookingId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);