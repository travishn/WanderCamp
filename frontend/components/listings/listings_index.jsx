import React from 'react';
import ListingsIndexItem from './listing_index_item';

class ListingsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const { listings, listingPhotos } = this.props;

    if (listingPhotos === {}) {
      return null;
    } else {
      return (
        <main className="discover-container">
          <section className="listing-filter">
            <p>FILTER GOES HERE</p>
          </section>

          <section className="listing-index">
            {listings.map(
              listing => <ListingsIndexItem key={listing.id}
                photos={listingPhotos} listing={listing} />
            )}
          </section>

          <section>
            <p>GOOGLE MAP GOES HERE</p>
          </section>

        </main>
      );
    }
  }
}

export default ListingsIndex;