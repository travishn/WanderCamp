import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchListings } from '../../actions/listing_actions';
import { selectAllListings, selectAllPhotos } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  listings: selectAllListings(state),
  listingPhotos: selectAllPhotos(state),
  searchListings: Object.values(state.entities.searchedListings)
});

const mapDispatchToProps = (dispatch) => ({
  fetchListings: () => dispatch(fetchListings())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingsIndex));