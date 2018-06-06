import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'login'
});

const mapDispatchToProps = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);