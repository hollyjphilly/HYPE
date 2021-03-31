import React from "react";
import { Link } from "react-router-dom";

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
          <div className="right-side-nav">
            <Link to={'/events'}>Events</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
            <a href="/" onClick={this.logoutUser}>Logout</a>
          </div>
        );
      } else {
        return (
          <div className="right-side-nav">
            <Link to={'/events'}>Events</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar-container">
              <div className="left-side-nav">
                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="80pt" viewBox="0 0 361.000000 114.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,114.000000) scale(0.1,-0.1)" fill="#fff" stroke="none">
                  <path d="M125 1128 c-2 -7 -16 -119 -30 -248 -14 -129 -27 -247 -30 -262 -3 -22 -1 -28 13 -28 24 1 931 225 938 233 4 4 14 67 23 142 l16 135 142 -312 142 -313 -6 -79 c-4 -46 -2 -77 3 -74 5 3 80 22 166 42 l157 37 9 43 c6 30 65 124 202 324 106 155 194 281 195 280 2 -3 -95 -885 -110 -1000 l-6 -48 164 0 165 0 5 28 c3 15 13 106 23 203 l18 177 130 4 c122 3 136 6 199 35 37 18 67 31 67 30 0 -2 -11 -105 -25 -231 -14 -126 -25 -232 -25 -237 0 -5 173 -8 413 -7 l412 3 11 85 c6 47 14 111 18 143 l6 57 -250 0 -251 0 6 62 c3 35 8 73 11 85 l4 23 224 0 223 0 6 42 c3 24 9 85 13 136 l7 92 -222 0 c-249 0 -227 -9 -215 84 l7 46 239 0 c182 0 240 3 243 13 8 20 32 257 27 262 -3 3 -65 5 -138 5 -139 0 -153 -2 -531 -93 l-102 -24 -33 35 c-18 19 -53 44 -78 56 -44 20 -59 21 -505 23 l-460 3 -104 -170 c-58 -93 -107 -167 -110 -164 -3 3 -35 78 -71 167 l-65 162 -338 3 c-185 1 -337 1 -337 0 0 -2 -9 -82 -20 -178 -11 -96 -20 -181 -20 -187 0 -10 -35 -13 -140 -13 -77 0 -140 1 -140 3 0 1 9 81 20 177 11 96 20 181 20 188 0 18 -319 18 -325 0z m2385 -273 c64 -33 44 -147 -30 -172 -19 -7 -55 -12 -80 -12 l-45 -1 11 98 c6 53 12 98 13 100 4 9 108 -1 131 -13z"/>
                  <path d="M2790 1115 c0 -14 3 -25 6 -25 11 0 169 42 173 46 2 2 -37 4 -87 4 -91 0 -92 0 -92 -25z"/>
                  <path d="M770 699 c-740 -177 -710 -169 -715 -192 -5 -21 -55 -474 -55 -496 0 -13 316 -16 324 -3 2 4 15 103 27 220 l23 212 138 0 c104 0 138 -3 138 -12 0 -7 -9 -83 -19 -168 -11 -85 -21 -177 -22 -205 l-3 -50 161 -3 162 -2 6 32 c8 50 75 667 75 694 0 16 -6 24 -17 23 -10 0 -110 -22 -223 -50z"/>
                  <path d="M1471 304 c-80 -19 -146 -36 -147 -37 -4 -4 -22 -124 -29 -200 l-7 -67 166 0 c126 0 166 3 166 13 0 6 7 70 15 142 19 171 19 185 -2 184 -10 -1 -83 -17 -162 -35z"/>
                  </g>
                </svg></a>
              </div>
              { this.getLinks() }
            </div>
      );
  }
}

export default NavBar;
