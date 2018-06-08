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
    this.props.login(this.state).then((payload) => this.props.closeModal());
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({username: 'RusselTheExplorer', password: 'badgecollector'}).then((payload) => this.props.closeModal());
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }
  
   renderErrors(field) {
    return (
      <div key={`error-${field}`} className='signup-errors'>
          {this.props.errors.find((error) => error.includes(field))}
        </div>
      );
    }
    
  render() {
    return (
      <div className='login-form-container'>
        <form className="session-form-box" onSubmit={(e) => this.handleSubmit(e)}>
          <h2 className="welcome-message">Welcome back!</h2>
          <p className="welcome-quote">Your next camping adventure awaits</p>
          <br/>
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

          {this.renderErrors('Invalid')}
          <p className="change-form">Don't have a Wandercamp account?</p>

          <div className="form-options-container">
            {this.props.changeForm}
            <p className='in-between'>|</p>
            <button className="form-option" onClick={(e) => this.handleDemoLogin(e)}>Demo Login</button>
          </div>
        </form>

      </div>
    );
  }
}

export default LoginForm;