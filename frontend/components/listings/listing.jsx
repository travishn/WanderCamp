import React from 'react';

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

  render () {
    const {listing, host, listingPhotos, petsAllowed} = this.props;
    const petFriendly = petsAllowed ? "Yes" : "No";

    if (listing === {}) {
      return null;
    } else {
      return (
        <main className="listing-container">
          <section className="listing-photos">
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

                <div className="detail-specifics">
                  <ul>
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
              </div>

              <div className="listing-activities">
              </div>

              <div className="listing-vibe">
              </div>

              <div className="listing-reviews">
              </div>
            </div>
            
            <div className="booking-form">
            </div>
          </section>
        </main>
      );
    }
  }
}

export default Listing;