import { connect } from 'react-redux';
import { searchListings } from '../../actions/listing_actions';
import Search from './search';
import { withRouter } from 'react-router';


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));