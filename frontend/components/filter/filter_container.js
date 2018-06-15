import { connect } from 'react-redux';
import Filter from './filter';
import {receiveFilter, 
  removeFilter, 
  receivePriceFilter, 
  removePriceFilter,
  receiveGroupFilter,
  removeGroupFilter,
  clearAllFilters} from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
  filters: state.ui.filters
});

const mapDispatchToProps = (dispatch) => ({
    receiveFilter: filter => dispatch(receiveFilter(filter)),
    removeFilter: filter => dispatch(removeFilter(filter)),
    receivePriceFilter: price => dispatch(receivePriceFilter(price)),
    removePriceFilter: price => dispatch(removePriceFilter(price)),
    receiveGroupFilter: capacity => dispatch(receiveGroupFilter(capacity)),
    removeGroupFilter: capacity => dispatch(removeGroupFilter(capacity)),
    clearAllFilters: () => dispatch(clearAllFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);