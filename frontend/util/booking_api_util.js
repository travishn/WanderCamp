export const fetchUserBookings = (userId) => (
  $.ajax({
    method: 'GET',
    url: '/api/bookings',
    data: {
      userId
    }
  })
);