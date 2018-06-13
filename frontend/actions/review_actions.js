import * as ReviewAPIUtil from '../util/review_api_util';
import ReviewsIndexItem from '../components/reviews/reviews_index_item';

export const RECEIVE_LISTING_REVIEWS = "RECEIVE_LISTING_REVIEWS";
export const RECEIVE_LISTING_REVIEW = "RECEIVE_LISTING_REVIEW";
export const REMOVE_LISTING_REVIEW = "REMOVE_LISTING_REVIEW";
export const UPDATE_LISTING_REVIEW = "UPDATE_LISTING_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_LISTING_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_LISTING_REVIEW,
  review
});

export const removeReview = (reviewId) => ({
  type: REMOVE_LISTING_REVIEW,
  reviewId
});

export const updateReview = (review) => ({
  type: UPDATE_LISTING_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const fetchListingReviews = (listingId) => (dispatch) => (
  ReviewAPIUtil.fetchListingReviews(listingId)
  .then( reviews => dispatch(receiveReviews(reviews)))
);

export const fetchListingReview = (reviewId) => (dispatch) => (
  ReviewAPIUtil.fetchListingReview(reviewId)
  .then( review => dispatch(receiveReview(review)))
);

export const createListingReview = (review) => (dispatch) => (
  ReviewAPIUtil.createListingReview(review)
  .then( dBreview => dispatch(receiveReview(dBreview)),
  err => dispatch(receiveReviewErrors(err.responseJSON)))
);

export const updateListingReview = (review) => (dispatch) => (
  ReviewAPIUtil.updateListingReview(review)
  .then( dBreview => dispatch(updateReview(dBreview)),
  err => dispatch(receiveReviewErrors(err.responseJSON)))
);

export const deleteListingReview = (reviewId) => (dispatch) => (
  ReviewAPIUtil.deleteListingReview(reviewId)
  .then( review => dispatch(removeReview(review.id)),
  err => dispatch(receiveReviewErrors(err.responseJSON)))
);