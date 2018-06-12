import {
  connect
} from 'react-redux';
import {
  fetchListingReviews,
  deleteListingReview
} from '../../actions/review_actions';
import ReviewsIndex from './reviews_index';

const mapStateToProps = (state, ownProps) => {
  const currentListing = state.entities.listings[ownProps.match.params.listingId];
  const reviews = state.entities.reviews;
  const currentUser = state.entities.users[state.session.id];

  return {
    currentUser,
    currentListing,
    reviews
  };
};

const mapDispatchToProps = dispatch => ({
  fetchListingReviews: listingId => dispatch(fetchListingReviews(listingId)),
  deleteListingReview: (reviewId) => dispatch(deleteListingReview(reviewId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
