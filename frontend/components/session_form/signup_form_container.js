import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
  signup: (formUser) => dispatch(signup(formUser)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);