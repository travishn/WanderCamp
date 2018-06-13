import React from 'react';
import { connect } from 'react-redux';
import { updateListingReview, receiveReviewErrors } from '../../actions/review_actions';

class EditReviewForm extends React.Component {

  render() {
    const {currentUser, formType, review} = this.props;
    
  }
}

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const currentListing = state.entities.listings[ownProps.match.params.listingId];
    const formType = "Updates Review";
    const errors = state.errors.review;

    return {
      currentUser,
      currentListing,
      formType,
      errors
    };
};

const mapDispatchToProps = (dispatch) => ({
  // do i need fetchReview here? Isnt my state already gonna have it on the listings show page
  updateListingReview: (review) => dispatch(updateListingReview(review)),
  clearErrors: () => dispatch(receiveReviewErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);