import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchListings, clearSearchListings } from '../../actions/listing_actions';
import { selectAllListings, selectAllPhotos } from '../../reducers/selectors';
import { withRouter } from 'react-router';
import { clearFilters } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => ({
  listings: selectAllListings(state),
  listingPhotos: selectAllPhotos(state),
  searchListings: Object.values(state.entities.searchedListings),
  filters: state.ui.filters
});

const mapDispatchToProps = (dispatch) => ({
  fetchListings: () => dispatch(fetchListings()),
  clearSearchListings: () => dispatch(clearSearchListings()),
  clearFilters: () => dispatch(clearFilters())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingsIndex));