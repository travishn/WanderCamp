import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  receiveFilter,
  receiveGroupFilter,
} from '../../actions/filter_actions';
import {
  fetchCategoryListings, searchListings
} from '../../actions/listing_actions';
import Home from './home';


const mapStateToProps = (state) => ({
  filters: state.ui.filters,
  listings: Object.values(state.entities.listings)
});

const mapDispatchToProps = (dispatch) => ({
  receiveFilter: filter => dispatch(receiveFilter(filter)),
  receiveGroupFilter: capacity => dispatch(receiveGroupFilter(capacity)),
  fetchCategoryListings: () => dispatch(fetchCategoryListings()),
  searchListings: (search) => dispatch(searchListings(search))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
