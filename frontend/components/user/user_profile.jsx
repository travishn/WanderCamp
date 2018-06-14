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
    const { bookings, listingPhotos, currentDateSum } = this.props;
    const bookingsInfo = Object.values(bookings);
    const upcoming = [];

    bookingsInfo.forEach( booking => {
      const bookingDate = booking.startDate;
      const bookingDateSum = parseInt(bookingDate.slice(0, 4))
        + parseInt(bookingDate.slice(5, 7))
        + parseInt(bookingDate.slice(8, 10));

      if (currentDateSum < bookingDateSum) upcoming.push(booking);
    });

    if (upcoming.length > 0 && upcoming[0].listing !== undefined) {
      return (
        <section className="upcoming-trips-container">
          <h2 className="upcoming-header">Upcoming Trips</h2>
          
          <ul className="bookings-container">
            {upcoming.map( booking => {
              return (
                <li key={`booking-${booking.id}`} className="booking-item">
                  <div>
                    <img src={ listingPhotos[booking.photoIds[0]]['imgUrl'] } className="booking-logo" />
                  </div>

                  <div className="booking-details">
                    <h1>{booking.listing.title}</h1>
                    <p>Booked from {booking.startDate} to {booking.endDate}</p>
                  </div>

                  <button className="cancel-btn"onClick={() => this.props.deleteUserBooking(booking.id)}>Cancel Booking</button>
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

  renderPastBookings() {
    const { bookings, listingPhotos, currentDateSum } = this.props;
    const bookingsInfo = Object.values(bookings);
    const past = [];

    bookingsInfo.forEach(booking => {
      const bookingDate = booking.startDate;
      const bookingDateSum = parseInt(bookingDate.slice(0, 4))
        + parseInt(bookingDate.slice(5, 7))
        + parseInt(bookingDate.slice(8, 10));

      if (currentDateSum > bookingDateSum) past.push(booking);

      if (past.length > 0 && past[0].listing !== undefined) {
        return (
          <section className="past-trips-container">
            <h2 className="past-header">Upcoming Trips</h2>

            <ul className="bookings-container">
              {past.map( pastBooking => {
                return (
                  <li key={`booking-${pastBooking.id}`} className="booking-item">
                    <div>
                      <img src={listingPhotos[pastBooking.photoIds[0]]['imgUrl']} className="booking-logo" />
                    </div>

                    <div className="booking-details">
                      <h1>{pastBooking.listing.title}</h1>
                      <p>Booked from {pastBooking.startDate} to {pastBooking.endDate}</p>
                    </div>

                    <button onClick={() => this.props.deleteUserBooking(pastBooking.id)}>Cancel Booking</button>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      } else {
        return <p>You don't have any past trips. Let's go camping!</p>;
      }
    });


  }

  render() {
    const { listingPhotos } = this.props;

    return (
      <div className="user-profile-container">
        {this.renderUpcomingBookings()}
        {this.renderPastBookings()}
      </div>
    );
  }
}

export default UserProfile;