import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="navbar-container">
            <div className="left-side-nav">
              <img src="" alt="" className="hype-logo"/>
              <div className="search-bar">

              </div>
            </div>
            <div className="right-side-nav">
              <Link to={'/events'}>Events</Link>
              <Link to={'/dashboard'}>Dashboard</Link>
              <button onClick={this.logoutUser}>Logout</button>
            </div>
          </div>
        );
      } else {
        return (
            <div className="navbar-container">
              <img src="" alt="" className="hype-logo"/>
                <div className="session-links">
                  <Link to={'/register'}>Register</Link>
                  <Link to={'/login'}>Login</Link>
                </div>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;

