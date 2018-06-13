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
    receivePriceFilter: amount => dispatch(receivePriceFilter(amount)),
    removePriceFilter: amount => dispatch(removePriceFilter(amount)),
    clearAllFilters: () => dispatch(clearAllFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);