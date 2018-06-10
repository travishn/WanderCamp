import { connect } from 'react-redux';
import Listing from './listing';
import { fetchListing } from '../../actions/listing_actions';
import { fetchUsers } from '../../actions/user_actions';
import { selectListingPhotos } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const listing = state.entities.listings[ownProps.match.params.listingId] || {};
  const host = state.entities.users[listing.hostId] || {};
  // const currentUser = state.entities.users[state.entities.session.id] || {};

  return {
    listing,
    host,
    listingPhotos: selectListingPhotos(state, listing),
    // currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchListing: (id) => dispatch(fetchListing(id)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);