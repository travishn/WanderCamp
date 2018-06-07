import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  sessionOption() {
    const { currentUser, logout } = this.props;

    if (currentUser) {
      return <button className='home-session' onClick={logout}>Log Out</button>;
    } else {
      return <button className='home-session' onClick={() => this.props.openModal('login')}>Log In</button>;
    }
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='left-nav-child'>
          <Link to="/" className="header-logo">
            <h1>WANDERCAMP</h1>
          </Link>
        </div>

        <div className='right-nav-child'>
          {this.sessionOption()}
        </div>

      </nav>
    );
  }
}

export default NavBar;