import React from 'react';

const ReviewsIndexItem = ({review}) => {
  return (
    <div className="review-item-container">
      <img className="index-item-reviewer" src={review.author.img_url}/>

      <div className="review-description">
        <div className="author">{review.author.first_name}</div>
        <div className="date">{review.createdAt}</div>
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewsIndexItem;