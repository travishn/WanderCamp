import { connect } from 'react-redux';
import { searchListings } from '../../actions/listing_actions';
import Search from './search';


const mapStateToProps = (state) => {
  const currentDate = new Date();
  const minDate = currentDate.toJSON().slice(0, 10);

  return {
    minDate
  };
};

const mapDispatchToProps = (dispatch) => ({
  searchListings: (search) => dispatch(searchListings(search))
});

connect(mapStateToProps, mapDispatchToProps)(Search);