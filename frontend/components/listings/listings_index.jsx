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
    this.props.clearFilters();
  }

  applyFilters(listings) {
    const { filters } = this.props;
    let filteredListings = listings;

    if (filters['camping']) filteredListings = filteredListings.filter(listing => listing.category === "camping");
    if (filters['glamping']) filteredListings = filteredListings.filter(listing => listing.category === "glamping");
    if (filters['petFriendly']) filteredListings = filteredListings.filter(listing => listing.petsAllowed === true);
    if (filters['beach']) filteredListings = filteredListings.filter(listing => listing.terrain === 'Beach');
    if (filters['mountain']) filteredListings = filteredListings.filter(listing => listing.terrain === 'Mountain');
    if (filters['forest']) filteredListings = filteredListings.filter(listing => listing.terrain === 'Forest');
    if (filters['desert']) filteredListings = filteredListings.filter(listing => listing.terrain === 'Desert');

    filteredListings = filteredListings.filter(listing => listing.price <= filters['price']);
    filteredListings = filteredListings.filter(listing => listing.capacity >= filters['capacity']);
    return filteredListings;
  }

  renderListingItem() {
    const { listings, listingPhotos, searchedListings } = this.props;
    let currentListings = listings;
    
    if (this.props.searchListings.length > 0 ){
      currentListings = this.props.searchListings;
    }
    
    currentListings = this.applyFilters(currentListings);

    return currentListings.map(
      listing => <ListingsIndexItem key={listing.id}
        photos={listingPhotos} listing={listing} /> 
    );
  }

  render() {
    const { listingPhotos } = this.props;
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

export default ListingsIndex;