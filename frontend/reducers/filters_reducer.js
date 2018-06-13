import {RECEIVE_FILTER, 
  REMOVE_FILTER, 
  CLEAR_ALL_FILTERS,
  RECEIVE_PRICE_FILTER,
  REMOVE_PRICE_FILTER,
  RECEIVE_GROUP_FILTER,
  REMOVE_GROUP_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const defaultState = ({
  camping: false,
  glamping: false,
  petFriendly: false,
  beach: false,
  desert: false,
  mountain: false,
  forest: false,
  swimming: false,
  hiking: false,
  biking: false,
  price: 100000,
  groupSize: 20
});

const filtersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FILTER:
      return merge({}, state, {[action.filter]: true});
    case REMOVE_FILTER:
      return merge({}, state, {[action.filter]: false});
    case CLEAR_ALL_FILTERS:
      return defaultState;
    case RECEIVE_PRICE_FILTER:
      return merge({}, state, {price: action.price});
    case REMOVE_PRICE_FILTER:
      return merge({}, state, {action: 100000});
    case RECEIVE_GROUP_FILTER:
      return merge({}, state, {groupSize: action.group});
    case REMOVE_GROUP_FILTER:
      return merge({}, state, {groupSize: 20});
    default:
      return state;
  }
};
