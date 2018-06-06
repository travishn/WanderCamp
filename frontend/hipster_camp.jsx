import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveCurrentUser, login} from './actions/session_actions';
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveCurrentUser = receiveCurrentUser;
  window.login = login;

  ReactDOM.render(<h1>Welcome to HipsterCamp</h1>, root);
});