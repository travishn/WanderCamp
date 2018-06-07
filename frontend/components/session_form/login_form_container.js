import React from 'react';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login'
});

const mapDispatchToProps = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  clearErrors: () => dispatch(receiveErrors([])),
  closeModal: () => dispatch(closeModal()),
  changeForm: (
    <a className="form-option" onClick={() => dispatch(openModal('signup'))}>
      Sign Up
    </a>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);