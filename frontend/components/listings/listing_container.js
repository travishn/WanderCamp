import { connect } from 'react-redux';
import Listing from './listing';
import { fetchListing, clearListings } from '../../actions/listing_actions';
import { selectListingPhotos } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const listing = state.entities.listings[ownProps.match.params.listingId];
  const reviews = state.entities.reviews;
  const host = !listing ? undefined : state.entities.users[listing.hostId];
  const currentUser = state.entities.users[state.session.id];

  return {
    listing,
    host,
    listingPhotos: selectListingPhotos(state, listing),
    currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchListing: (id) => dispatch(fetchListing(id)),
  clearListings: () => dispatch(clearListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);