import * as BookingAPIUtil from '../util/booking_api_util';
export const RECEIVE_USER_BOOKINGS = "RECEIVE_USER_BOOKINGS";
export const RECEIVE_USER_BOOKING = "RECEIVE_USER_BOOKING";
export const REMOVE_USER_BOOKING = "REMOVE_USER_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";

export const receiveBookings = (payload) => ({
  type: RECEIVE_USER_BOOKINGS,
  payload
});

export const receiveBooking = (booking) => ({
  type: RECEIVE_USER_BOOKING,
  booking
});

export const removeBooking = (bookingId) => ({
  type: REMOVE_USER_BOOKING,
  bookingId
});

export const receiveBookingErrors = (errors) => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const fetchUserBookings = (userId) => dispatch => (
  BookingAPIUtil.fetchUserBookings(userId)
  .then(payload => dispatch(receiveBookings(payload)),
    err => dispatch(receiveBookingErrors(err.responseJSON)))
);

export const deleteUserBooking = (bookingId) => dispatch => (
    BookingAPIUtil.deleteUserBooking(bookingId)
    .then(booking => dispatch(removeBooking(booking.id)),
      err => dispatch(receiveBookingErrors(err.responseJSON))
    )
  );

  export const createUserBooking = (booking) => dispatch => (
    BookingAPIUtil.createUserBooking(booking)
    .then(dBbooking => dispatch(receiveBooking(dBbooking)))
  );