import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const fetchUsers = () => (dispatch) => (
  UserAPIUtil.fetchUsers().then( users => dispatch(receiveUsers(users)))
);