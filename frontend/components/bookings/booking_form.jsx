import React from 'react';
import merge from 'lodash/merge';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing_id: this.props.match.params.listingId,
      num_guests: 1,
      start_date: "",
      end_date: ""
    };
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentListing, currentUserBookings, currentUser } = this.props;

    if (!currentUser) {
      this.props.openModal('login');
    } else {
      const booking = merge({}, this.state);
      booking.guest_id = currentUser.id;

      this.props.createUserBooking(booking)
        .then(() => this.props.history.push(`/users/${currentUser.id}`));
    }
  }

  handleNumChange(field) {
    const { currentListing } = this.props;
    return (e) => {
      if (field === "-" && (this.state.num_guests > 1)) {
        this.setState({ num_guests: this.state.num_guests - 1 });
      } else if (field === "+" && (this.state.num_guests < currentListing.capacity)) {
        this.setState({ num_guests: this.state.num_guests + 1});
      }
    };
  }

  renderSubmitButton() {
    const { currentUser, currentUserBookings, currentListing } = this.props;
    // const bookings = Object.values(currentUserBookings);

    // for (const booking of bookings) {
    //   if (currentListing.id === booking.listingId) {
    //     return (
    //       <button
    //         type="submit"
    //         className="disabled-btn"
    //         disabled>
    //         Cancel Booking
    //       </button>
    //     );
    //   }
    // if (currentUser) {
      return (
        <button
          type="submit"
          className="direct-book-btn">
          Direct book
        </button>
      );
    // } else {
    //   return (
    //     <button
    //       type="submit"
    //       className="disabled-btn"
    //       disabled>
    //       Direct book
    //     </button>
    //   );
    // }
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  renderErrors() {
    return (
      <ul className="booking-form-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { minDate, currentListing } = this.props;
    if (currentListing == null) return null;

    return (
      <aside className="booking-form-container">
          <h3>${currentListing.price}</h3>
          <p>per night</p>
          <form onSubmit={(e) => this.handleSubmit(e)} >
            
            <input
              type="date"
              min={minDate}
              max={this.state.end_date}
              value={this.state.start_date}
              onChange={this.handleChange("start_date")}
              className="start_date_input"
            />

            <input
              type="date"
              min={this.state.start_date}
              value={this.state.end_date}
              onChange={this.handleChange("end_date")}
              className="start_date_input"
            />

            {/* avoid using button bc of default behavior in forms */}
            <a onClick={this.handleNumChange('-')}>-</a> 
            <span>{this.state.num_guests}</span>
            <a onClick={this.handleNumChange('+')}>+</a>
            {this.renderSubmitButton()}
          </form>
  
        </aside>
      );
    }
}

export default BookingForm;