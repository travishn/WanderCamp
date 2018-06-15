import { connect } from 'react-redux';
import {
  receiveFilter,
  removeFilter,
  receivePriceFilter,
  removePriceFilter,
  receiveGroupFilter,
  removeGroupFilter
} from '../../actions/filter_actions';
import Home from './home';


const mapStateToProps = (state) => ({
  filters: state.ui.filters
});

const mapDispatchToProps = (dispatch) => ({
  receiveFilter: filter => dispatch(receiveFilter(filter)),
  removeFilter: filter => dispatch(removeFilter(filter)),
  receivePriceFilter: amount => dispatch(receivePriceFilter(amount)),
  removePriceFilter: amount => dispatch(removePriceFilter(amount)),
  receiveGroupFilter: capacity => dispatch(receiveGroupFilter(capacity)),
  removeGroupFilter: capacity => dispatch(removeGroupFilter(capacity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
