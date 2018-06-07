import React from 'react';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignUpForm from './signup_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
  signup: (formUser) => dispatch(signup(formUser)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(receiveErrors([])),
  closeModal: () => dispatch(closeModal()),
  changeForm: (
    <a className='changeForm-link' onClick={() => dispatch(openModal('login'))}>
      Log In
    </a>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);