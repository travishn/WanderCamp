import React from 'react';
import ListingsIndexItem from './listing_index_item';

class ListingsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const { listings, photos } = this.props;

    if (photos === {}) {
      return null;
    } else {
      return (
        <div className="discover-container">
          <section className="listing-filter">
            <p>FILTER GOES HERE</p>
          </section>
          <section className="listing-index">
            {listings.map(
              listing => <ListingsIndexItem key={listing.id}
                photos={photos} listing={listing} />
            )}
          </section>
        </div>
      );
    }
  }
}

export default ListingsIndex;