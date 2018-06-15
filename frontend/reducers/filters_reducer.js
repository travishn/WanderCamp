import {RECEIVE_FILTER, 
  REMOVE_FILTER, 
  CLEAR_FILTERS,
  RECEIVE_PRICE_FILTER,
  REMOVE_PRICE_FILTER,
  RECEIVE_GROUP_FILTER,
  REMOVE_GROUP_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const defaultState = ({
  camping: false,
  glamping: false,
  petFriendly: false,
  price: 122493,
  capacity: 1,
  swimming: false,
  hiking: false,
  biking: false,
  beach: false,
  desert: false,
  mountain: false,
  forest: false
});

const filtersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FILTER:
      return merge({}, state, {[action.filter]: true});
    case REMOVE_FILTER:
      return merge({}, state, {[action.filter]: false});
    case CLEAR_FILTERS:
      return defaultState;
    case RECEIVE_PRICE_FILTER:
      return merge({}, state, {price: action.price});
    case REMOVE_PRICE_FILTER:
      return merge({}, state, {price: 122493});
    case RECEIVE_GROUP_FILTER:
      return merge({}, state, {capacity: action.capacity});
    case REMOVE_GROUP_FILTER:
      return merge({}, state, {capacity: 1});
    default:
      return state;
  }
};

export default filtersReducer;