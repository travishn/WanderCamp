import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      zipcode: ''
      };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state); //can later add in .then push statement to 'redirect'
  }

  
  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  renderErrors(field) {
    return (
      <div key={`error-${field}`} className='signup-errors'>
        {this.props.errors.find( (error) => error.includes(field) )}
      </div>
    );
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="signup-form-container">
        <h2>Welcome to HipsterCamp!</h2>
        <form className="signup-form-box" onSubmit={(e) => this.handleSubmit(e)}>
          <input 
          type='text' 
          value={this.state.first_name} 
          placeholder='First Name' 
          onChange={this.handleChange('first_name')}/>
          {this.renderErrors('First')}

          <input 
          type='text' 
          value={this.state.last_name} 
          placeholder='Last Name' 
          onChange={this.handleChange('last_name')}/>
          {this.renderErrors('Last')}

          <input 
          type='text' 
          value={this.state.username} 
          placeholder='Username' 
          onChange={this.handleChange('username')}/>
          {this.renderErrors('Username')}
          
          <input 
          type='password' 
          value={this.state.password} 
          placeholder='Password' 
          onChange={this.handleChange('password')}/>
          {this.renderErrors('Password')}

          <input 
          type='text' 
          value={this.state.zipcode} 
          placeholder='Zip Code' 
          onChange={this.handleChange('zipcode')}/>
          {this.renderErrors('Zipcode')}

          <button type="submit" className="session-submit">Join HipsterCamp</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;