import {
  RECEIVE_LISTING_REVIEWS,
  RECEIVE_LISTING_REVIEW,
  REMOVE_LISTING_REVIEW,
  UPDATE_LISTING_REVIEW
} from '../actions/review_actions';
import { RECEIVE_LISTING } from '../actions/listing_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING_REVIEWS:
      return action.reviews;
    case RECEIVE_LISTING_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case REMOVE_LISTING_REVIEW:
      let newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;
    case UPDATE_LISTING_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case RECEIVE_LISTING:
      return action.payload.reviews || {};
    default:
      return state;
  }
};

export default reviewsReducer;