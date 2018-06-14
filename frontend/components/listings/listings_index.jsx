import React from 'react';
import ListingsIndexItem from './listing_index_item';
import FilterContainer from '../filter/filter_container';

class ListingsIndex extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchListings();
  }
  
  componentWillUnmount() {
    this.props.clearSearchListings();
  }

  applyFilters(currentListings) {
    const { filters } = this.props;

    const filteredListings = [];

    for (const listing of currentListings) {
      if (filters['camping'] && listing.category === 'camping') 
        filteredListings.push(listing);
      else if (filters['glamping'] && listing.category === 'glamping')
        filteredListings.push(listing);
      else if (filters['petFriendly'] && listing.petsAllowed)
        filteredListings.push(listing);
      else if (filters['beach'] && listing.terrain === 'Beach')
        filteredListings.push(listing);
      else if (filters['forest'] && listing.terrain === 'Forest')
        filteredListings.push(listing);
      else if (filters['mountain'] && listing.terrain === 'Mountain')
        filteredListings.push(listing);
      else if (filters['desert'] && listing.terrain === 'Desert')
        filteredListings.push(listing);
      else if (filters['capacity'] <= listing.capacity)
        filteredListings.push(listing);
      else if (filters['price'] > listing.price)
        filteredListings.push(listing);
    }

    return filteredListings;
  }

  renderListingItem() {
    const { listings, listingPhotos, searchedListings } = this.props;
    let currentListings = listings;
    
    if (this.props.searchListings.length > 0 ){
      currentListings = this.props.searchListings;
    }
    
    currentListings = this.applyFilters(currentListings);
    // debugger;

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
          <FilterContainer />

          <section className="listing-index">
            {this.renderListingItem()}
          </section>

        </main>
      );
    }
  }
}

export default ListingsIndex;