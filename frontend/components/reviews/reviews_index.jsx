import React from 'react';
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {

  renderReviewItems() {
    const { reviews } = this.props;
    return reviews.map( review => (
      <ReviewsIndexItem key={review.id} review={review}/>
    ));
  }

  render() {
    return (
      <section className="review=index-container">
        <div className="review-count">
          <p># Of Reviews</p>
        </div>

        <div className="review-list-container">
          {this.renderReviewItems()}
        </div>
      </section>
    );
  }
}

export default ReviewsIndex;