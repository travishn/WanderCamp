import { connect } from 'react-redux';
import {
  receiveFilter,
  receiveGroupFilter,
} from '../../actions/filter_actions';
import {
  fetchCategoryListings
} from '../../actions/listing_actions';
import Home from './home';


const mapStateToProps = (state) => ({
  filters: state.ui.filters,
  listings: Object.values(state.entities.listings)
});

const mapDispatchToProps = (dispatch) => ({
  receiveFilter: filter => dispatch(receiveFilter(filter)),
  receiveGroupFilter: capacity => dispatch(receiveGroupFilter(capacity)),
  fetchCategoryListings: () => dispatch(fetchCategoryListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
