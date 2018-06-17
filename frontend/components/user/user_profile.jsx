import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUserBookngs(this.props.currentUser.id);
    }
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUserBookings(this.props.currentUser.id);
  }

  // componentWillUnmount() {
  //   this.props.clearPhotos();
  // }

  deleteBooking(id) {
    return (e) => {
      e.preventDefault();
      this.props.deleteUserBooking(id);
    };
  }

  renderUpcomingBookings(upcoming) {
    const { listingPhotos } = this.props;

    if (upcoming.length > 0 && upcoming[0].listing !== undefined) {
      return (
        <section className="upcoming-trips-container">
          <h2 className="upcoming-header">Upcoming Trips</h2>
          
          <ul className="bookings-container">
            {upcoming.map( booking => {
              return (
                <li key={`booking-${booking.id}`} className="booking-item">
                  <div>
                    <Link to={`/listings/${booking.listingId}`}>
                      <img src={ listingPhotos[booking.photoIds[0]]['imgUrl'] } className="booking-logo" />
                    </Link>
                  </div>

                  <div className="booking-details">
                    <h1>{booking.listing.title}</h1>
                    <p>Booked from {booking.startDate} to {booking.endDate}</p>
                  </div>

                  <button className="cancel-btn" onClick={() => this.props.deleteUserBooking(booking.id)}>Cancel Booking</button>
                </li>
              );
            })}
          </ul>
        </section>
        
      );
    }
    else {
      return (
        <div className="no-trips-container">
          <p className="no-trips-text">You don't have any upcoming trips. Let's go camping!</p>
        </div>
      );
    }
  }

  renderPastBookings(past) {
    const { listingPhotos } = this.props;

    if (past.length > 0 && past[0].listing !== undefined) {
      return (
        <section className="upcoming-trips-container">
          <h2 className="upcoming-header">Past Trips</h2>

          <ul className="past-bookings-container">
            {past.map(pastBooking => {
              return (
                <li key={`booking-${pastBooking.id}`} className="booking-item">
                  <div>
                    <Link to={`/listings/${pastBooking.listingId}`}>
                      <img src={listingPhotos[pastBooking.photoIds[0]]['imgUrl']} className="booking-logo" />
                    </Link>
                  </div>

                  <div className="booking-details">
                    <h1>{pastBooking.listing.title}</h1>
                    <p>Booked from {pastBooking.startDate} to {pastBooking.endDate}</p>
                  </div>

                  <button className="cancel-btn" onClick={() => this.props.deleteUserBooking(pastBooking.id)}>Cancel Booking</button>
                </li>
              );
            })}
          </ul>
        </section>
      );
    }
  }

  render() {
    const { bookings, listingPhotos, currentDateSum } = this.props;
    const bookingsInfo = Object.values(bookings);
    const upcoming = [];
    const past = [];

    bookingsInfo.forEach(booking => {
      const bookingDate = booking.startDate;
      const bookingDateSum = parseInt(bookingDate.slice(0, 4))
        + parseInt(bookingDate.slice(5, 7))
        + parseInt(bookingDate.slice(8, 10));

      if (currentDateSum <= bookingDateSum) upcoming.push(booking);
      else past.push(booking);
    });

    return (
      <div className="user-profile-container">
        {this.renderUpcomingBookings(upcoming)}
        {this.renderPastBookings(past)}
      </div>
    );
  }
}

export default UserProfile;