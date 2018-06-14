export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS";
export const RECEIVE_PRICE_FILTER = "RECEIVE_PRICE_FILTER";
export const REMOVE_PRICE_FILTER = "REMOVE_PRICE_FILTER";
export const RECEIVE_GROUP_FILTER = "RECEIVE_GROUP_FILTER";
export const REMOVE_GROUP_FILTER = "REMOVE_GROUP_FILTER";

export const receiveFilter = filter => ({
  type: RECEIVE_FILTER,
  filter
});

export const removeFilter = filter => ({
  type: REMOVE_FILTER,
  filter
});

export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS
});

export const receivePriceFilter = price => ({
  type: RECEIVE_PRICE_FILTER,
  price
});

export const removePriceFilter = () => ({
  type: REMOVE_PRICE_FILTER
});

export const receiveGroupFilter = capacity => ({
  type: RECEIVE_GROUP_FILTER,
  capacity
});

export const removeGroupFilter = () => ({
  type: REMOVE_GROUP_FILTER
});

