import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import {
   createUserBooking, 
   receiveBookingErrors 
  } from '../../actions/booking_actions';
import { selectUserBookings } from '../../reducers/selectors';
import BookingForm from './booking_form';

const mapStateToProps = (state, ownProps) => {
  // const currentUser = state.entities.users[state.session.id] || {};
  const currentUser = state.entities.users[state.session.id];
  const currentListing  = state.entities.listings[ownProps.match.params.listingId];
  // const currentUserBookings = selectUserBookings(state, currentUser);
  const currentDate = new Date();
  const minDate = currentDate.toJSON().slice(0, 10);
  const errors = state.errors.booking;

  return {
    currentUser,
    currentListing,
    // currentUserBookings,
    minDate,
    errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  createUserBooking: (booking) => dispatch(createUserBooking(booking)),
  clearErrors: () => dispatch(receiveBookingErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
