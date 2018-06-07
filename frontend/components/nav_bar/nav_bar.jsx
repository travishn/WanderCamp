import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  
  handleLogin() {

  }

  sessionOption() {
    const { currentUser, logout } = this.props;

    if (currentUser) {
      return <a className='home-session' onClick={logout}>Log Out</a>;
    } else {
      return <a className='home-session' onClick={() => this.props.openModal('login')}>Log In</a>;
    }
  }

  handleLogout() {

  }

  render() {
    return (
      <nav>
        <header>
          <Link to="/" className="header-link">
            <h1>HipsterCamp + Logo</h1>
          </Link>
        </header>
        
        {this.sessionOption()}
      </nav>
    );
  }
}

export default NavBar;