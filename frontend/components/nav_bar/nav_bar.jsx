import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  renderSessionOption() {
    const { currentUser, logout } = this.props;
    if (currentUser) {
      if (currentUser.imgUrl === "https://res.cloudinary.com/emanon/image/upload/v1528437705/guest.png") {
        return (
          <div className='right-nav-child'>
            <div className='profile-pic'>
              <Link className="default-pic" to={`/users/${currentUser.id}`}>
                <img src={currentUser.imgUrl} />
              </Link>
              <h2 className='logged-user'>Welcome, {currentUser.firstName}</h2>
            </div>
            <div className="home-session-div">
              <button className='home-session' onClick={logout}>Log Out</button>
            </div>
          </div>
        );
      } else {
        return (
          <div className='right-nav-child'>
            <div className='profile-pic'>
              <Link className="assigned-pic" to={`/users/${currentUser.id}`}>
                <img src={currentUser.imgUrl} />
              </Link>
              <h2 className='logged-user'>Welcome, {currentUser.firstName}</h2>
            </div>
            <div className="home-session-div">
              <button className='home-session' onClick={logout}>Log Out</button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className='right-nav-child'>
          <div className="home-session-div">
            <button className='home-session-login' onClick={() => this.props.openModal('login')}>Log In</button>
          </div>
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

  handleLogout() {
    const { logout } = this.props;
    logout().then(history.push("/"));
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