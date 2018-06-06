import React from 'react';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <h1>HipsterCamp</h1>
    <SignUpFormContainer />
  </div>
);

export default App;