export const fetchUserBookings = (userId) => (
  $.ajax({
    method: 'GET',
    url: '/api/bookings',
    data: { userId }
  })
);

export const createUserBooking = (booking) => (
  $.ajax({
    method: 'POST',
    url: '/api/bookings',
    data: { booking }
  })
);

export const deleteUserBooking = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${id}`
  })
);