import React from 'react';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import ModalContainer from './modal/modal_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from '../components/home/home';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <ModalContainer />
    <NavBarContainer />

    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;