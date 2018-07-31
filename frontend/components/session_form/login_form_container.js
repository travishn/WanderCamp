import React from 'react';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login'
});

// const animateForm = (e) => {
//   e.preventDefault();
//   const targetEl = document.querySelector('.modal-child')
//   targetEl.classList.remove('slideInDown');
//   targetEl.classList.add('flipInY');

//   window.setTimeout(() => {
//     dispatch(openModal('signup'));
//   }, 600);
// }

const mapDispatchToProps = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  clearErrors: () => dispatch(receiveErrors([])),
  closeModal: () => dispatch(closeModal()),
  openModal: (form) => dispatch(openModal(form)),
  changeForm: (
    <button className="form-option" onClick={(e) => animateForm(e)}>
      Sign Up
    </button>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);