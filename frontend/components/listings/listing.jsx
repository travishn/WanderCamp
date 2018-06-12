import React from 'react';
import BookingFormContainer from '../bookings/booking_form_container';
import CreateReviewFormContainer from '../reviews/create_review_form_container';
import ReviewsIndexContainer from '../reviews/reviews_index_container';
import { fetchUserBookings } from '../../actions/booking_actions';
import { Route } from 'react-router-dom';

class Listing extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listingId !== nextProps.match.params.listingId) {
      this.props.fetchListing(nextProps.match.params.listingId);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchListing(this.props.match.params.listingId);
  }

  renderReviewForm() {
    const { currentUser, listing } = this.props;
    const listingGuestIds = this.props.listing.guestIds;
    if (currentUser == null) return null;

    if (listingGuestIds.includes(currentUser.id)) {
      return (
      <CreateReviewFormContainer />
      );
    } else {
      return (
        <div className="review-message-container">
          <p>Want to write a review? Book a trip first!</p>
        </div>
      );
    }
  }

  render () {
    const {listing, host, listingPhotos, petsAllowed} = this.props;
    const petFriendly = petsAllowed ? "Yes" : "No";
    if (!listing || !host) {
      return null;
    } else {
      return (
        <main className="listing-container">
          <section className="listing-photos">
            <p>PHOTOS GO HERE</p>
          </section>

          <section className="listing-box">
            <div className="listing-content">
              <div className="listing-header">
                <h1>{listing.title}</h1>
                <button className="save-button">Save</button>
              </div>

              <div className="listing-info">
                <div className="hosted-by">
                  <img id="host-pic" src={host.imgUrl} />
                  <div className="host-info">
                    <strong>Hosted by</strong>
                    <p>{host.firstName}</p>
                  </div>
                </div>

                <div className="listing-description">
                  <p>{listing.description}</p>
                </div>
              </div>

              <div className="listing-details">
                <div className="category-title">
                  <p>Details</p>
                </div>

                <ul className="detail-specifics">
                    <li>
                      <strong>Check in: </strong>
                      <span>{listing.checkIn}</span>
                    </li>

                    <li>
                      <strong>Check out: </strong>
                      <span>{listing.checkOut}</span>
                    </li>

                    <li>
                      <strong>Cancellation policy: </strong>
                      <span>{listing.cancellationPolicy}</span>
                    </li>

                    <li>
                      <strong>Pets Allowed: </strong>
                      <span>{petFriendly}</span>
                    </li>

                    <li>
                      <strong>Capacity: </strong>
                      <span>{listing.capacity}</span>
                    </li>
                    
                    <li>
                      <strong>Terrain: </strong>
                      <span>{listing.terrain}</span>
                    </li>

                  </ul>
              </div>

              <div className="listing-activities">
                <div className="category-title">
                  <p>Activities</p>
                </div>

                <ul className="detail-specifics">
                  <li>
                    <img src="https://res.cloudinary.com/emanon/image/upload/c_thumb,w_200,g_face/v1528620798/man-in-hike.png" />
                    <span>Hiking</span>
                  </li>

                  <li>
                    <img src="https://res.cloudinary.com/emanon/image/upload/v1528621558/swimming-silhouette.png"/>
                    <span>Swimming</span>
                  </li>

                  <li>
                    <img src="https://res.cloudinary.com/emanon/image/upload/v1528621942/eagle.png" />
                    <span>Wildlife Watching</span>
                  </li>
                  
                  <li>
                    <img src="https://res.cloudinary.com/emanon/image/upload/v1528621650/bicycle-rider.png" />
                    <span>Biking</span>
                  </li>

                </ul>
              </div>

              <div className="listing-vibe">
                <p>THE VIBES GO HERE</p>
              </div>

              <div className="listing-reviews">
                <ReviewsIndexContainer />
                {this.renderReviewForm()}
              </div>
            </div>
            
            <div className="booking-form">
              <BookingFormContainer />
            </div>
          </section>
        </main>
      );
    }
  }
}

export default Listing;