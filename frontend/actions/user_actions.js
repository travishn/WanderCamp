import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveUsers = (payload) => ({
  type: RECEIVE_ALL_USERS,
  payload
});

export const fetchUsers = () => (dispatch) => (
  UserAPIUtil.fetchUsers().then( payload => dispatch(receiveUsers(payload)))
);