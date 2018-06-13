import React from 'react';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {

  renderReviewItems() {
    const { reviews, deleteListingReview, currentUser, currentListing, updateListingReview } = this.props;

    return reviews.map( review => (
      <ReviewsIndexItem 
        key={review.id} 
        review={review}
        deleteReview={deleteListingReview}
        currentUser={currentUser}
        currentListing={currentListing}
        updateReview={updateListingReview}/>
    ));
  }

  render() {
    const { currentListing, currentUser } = this.props;

    if (!currentListing) return null;
    return (
      <section className="review-index-container">
        <div className="review-count">
          <p>6 Reviews</p>
        </div>

        <div className="review-list-container">
          {this.renderReviewItems()}
        </div>
      </section>
    );
  }
}

export default ReviewsIndex;