import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUserBookngs(this.props.currentUser.id);
    }
  }


  componentDidMount() {
    this.props.fetchUserBookings(this.props.currentUser.id);
  }

  deleteBooking(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteUserBooking(id);
    };
  }

  renderUpcomingBookings () {
    const { bookings, listingPhotos } = this.props;

    const currentDate = new Date().toJSON().slice(0, 10);
    const currentDateSum = parseInt(currentDate.slice(0, 4))
      + parseInt(currentDate.slice(5, 7))
      + parseInt(currentDate.slice(8, 10));
    const bookingsInfo = Object.values(bookings);
    const upcoming = [];

    bookingsInfo.forEach( booking => {
      const bookingDate = booking.startDate;
      const bookingDateSum = parseInt(bookingDate.slice(0, 4))
        + parseInt(bookingDate.slice(5, 7))
        + parseInt(bookingDate.slice(8, 10));

      if (currentDateSum < bookingDateSum) upcoming.push(booking);
    });

    if (upcoming.length > 0) {
      return (
        <section className="upcoming-trips-container">
          <h2 className="upcoming-header">Upcoming Trips</h2>
          
          <ul className="bookings-container">
            {upcoming.map( booking => {
              return (
                <li key={`booking-${booking.id}`} className="booking-item">
                  <div>
                    {/* <img src={listingPhotos[booking.listingId]["imgUrl"]} className="booking-logo" /> */}
                  </div>

                  <div className="booking-details">
                    <h1>{booking.listing.title}</h1>
                    <p>Booked from {booking.startDate} to {booking.endDate}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      );
    } else {
      return <p>You don't have any upcoming trips. Let's go camping!</p>;
    }
  }

  pastBookings() {

  }

  render() {
    return (
    <div className="user-profile-container">
      {this.renderUpcomingBookings()}
    </div>
    );
  }
}

export default UserProfile;