import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createListingReview, 
  deleteListingReview, 
  receiveReviewErrors,
  fetchListingReview
} from '../../actions/review_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const currentListing = state.entities.listings[ownProps.match.params.listingId];
  const formType = "Submit Review";
  const review = {listing_id: ownProps.match.params.listingId, author_id: state.session.id, comment: ''};
  const errors = state.errors.review;

  return {
    currentUser,
    currentListing,
    review,
    errors,
    formType
  };
};

const mapDispatchToProps = (dispatch) => ({
  createListingReview: (review) => dispatch(createListingReview(review)),
  clearErrors: () => dispatch(receiveReviewErrors([])),
  fetchListingReview: (reviewId) => dispatch(fetchListingReview(reviewId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));