import React from 'react';
import ListingsIndexItem from './listing_index_item';

class ListingsIndex extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchListings();
  }
  
  componentWillUnMount() {
    this.props.clearSearchListings();
  }

  renderListingItem() {
    const { listings, listingPhotos, searchedListings } = this.props;
    let currentListings = listings;

    if (this.props.searchListings.length > 0 ){
      currentListings = this.props.searchListings;
    }

    return currentListings.map(
      listing => <ListingsIndexItem key={listing.id}
        photos={listingPhotos} listing={listing} /> 
    );
  }

  render() {
    const { listingPhotos } = this.props;

    if (listingPhotos === {}) {
      return null;
    } else {
      return (
        <main className="discover-container">
          <section className="listing-filter">
            <p>FILTER GOES HERE</p>
          </section>

          <section className="listing-index">
            {this.renderListingItem()}
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