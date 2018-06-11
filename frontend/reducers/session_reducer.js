import { RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER 
} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullState = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _nullState;
    default:
      return state;
  }
};

export default sessionReducer;