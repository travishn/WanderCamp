import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import MapSearch from './map_search';

const mapStateToProps = (state) => ({
  listings: Object.values(state.entities.listings)
});

const mapDispatchToprops = (dispatch) => ({
  fetchListings: () => dispatch(fetchListings())
});

export default connect(mapStateToProps, mapDispatchToprops)(MapSearch);