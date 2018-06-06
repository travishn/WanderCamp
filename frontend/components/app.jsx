import React from 'react';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <h1>HipsterCamp</h1>
    <LoginFormContainer />
  </div>
);

export default App;