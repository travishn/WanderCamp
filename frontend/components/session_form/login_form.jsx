import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className='login-form-container'>
        <form className="login-form-box" onSubmit={(e) => this.handleSubmit(e)}>
          <p className="welcome-message">Welcome to HipsterCamp!</p>
          <br/>
          <div>
            <input 
            type='text' 
            value={this.state.username}
            placeholder='Username' 
            className="login-input" 
            onChange={this.handleChange('username')}/>

            <input 
            type='password' 
            value={this.state.password} 
            placeholder='Password' 
            className="login-input" 
            onChange={this.handleChange('password')}/>

            <button type="submit" className="session-submit">Log In</button>
            <p className="change-form">Live life with no excuses, travel with no regret {this.props.changeForm}</p>
          </div>
        </form>

      </div>
    );
  }
}

export default LoginForm;