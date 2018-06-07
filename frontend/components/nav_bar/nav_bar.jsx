import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  renderSessionOption() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      return (
        <div className='right-nav-child'>
          <div className='profile-pic'>
            <img src={currentUser.imgUrl} />
            <h2 className='logged-user'>Welcome, {currentUser.firstName}</h2>
          </div>
          <button className='home-session' onClick={logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className='right-nav-child'>
          <button className='home-session' onClick={() => this.props.openModal('login')}>Log In</button>
        </div>
      );
    }
  }

  renderLogo() {
    return (
      <div className='left-nav-child'>
        <Link to="/" className="header-logo">
          <h1>WANDERCAMP</h1>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav className='navbar'>
        {this.renderLogo()}
        {this.renderSessionOption()}
      </nav>
    );
  }
}

export default NavBar;