import React from 'react';
import ListingsIndexItem from './listing_index_item';

class ListingsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  renderListings() {
    const { listings, photos } = this.props;
    
    if (photos === {}) {
      return null;
    } else {
        return (
          <ul className="listing-index-container">
            {listings.map(
              listing => <ListingsIndexItem key={listing.id} 
                photos={photos} listing={listing} />
            )}
          </ul>
        );
    }
  }

  render() {
    return (
      <section className="listing-index">
        {this.renderListings()}
      </section>
    );
  }
}

export default ListingsIndex;