import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.animateOut = this.animateOut.bind(this);
    this.animateForm = this.animateForm.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { errors } = this.props;
    this.props.login(this.state).then((payload => {
      this.animateOut();
    }), (err) => {return});
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.setState({username: ''});
    this.setState({password: ''});
    const username = "RusselTheExplorer";
    const password = "badgecollector";
    username.split("").forEach((letter, i) => {
      window.setTimeout(() => {
        this.setState({ username: this.state.username + letter });
      }, 60 * i);
    });

    password.split("").forEach((letter, i) => {
      window.setTimeout(() => {
        this.setState({ password: this.state.password + letter });
      }, 60 * i + 60 * username.length);
    });

    window.setTimeout(() => {
      this.animateOut();
      this.props.login({ username: username, password: password });
    }, 60 * password.length + 60 * username.length);
  }

  animateOut() {
    const { closeModal } = this.props;
    const targetEl = document.querySelector(".modal-child");
    targetEl.className = "modal-child animated fadeOutUp";

    window.setTimeout(() => {
      closeModal();
    }, 500);
  }

  animateForm(e) {
    e.preventDefault();
    const { openModal } = this.props;
    const targetEl = document.querySelector('.modal-child')
    targetEl.className = 'modal-child animated flipInY';
    openModal('signup');
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors(field) {
    return (
      <div key={`error-${field}`} className="signup-errors">
        {this.props.errors.find(error => error.includes(field))}
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="session-form-box" onSubmit={e => this.handleSubmit(e)}>
          <h2 className="welcome-message">Welcome back!</h2>
          <p className="welcome-quote">Your next camping adventure awaits</p>
          <br />
          <input
            type="text"
            value={this.state.username}
            placeholder="Username"
            className="login-input"
            onChange={this.handleChange("username")}
          />

          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            className="login-input"
            onChange={this.handleChange("password")}
          />

          <button type="submit" className="session-submit">
            Log In
          </button>

          {this.renderErrors("Invalid")}
          <p className="change-form">Don't have a Wandercamp account?</p>

          <div className="form-options-container">
            {/* {this.props.changeForm} */}
            <button className="form-option" onClick={(e) => this.animateForm(e)}>
              Sign Up
            </button>
            <p className="in-between">|</p>
            <button
              className="form-option"
              onClick={e => this.handleDemoLogin(e)}
            >
              Demo Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;