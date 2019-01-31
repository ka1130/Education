import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar">
          <li className="navbar-item"><Link to='/'>Hourly details</Link></li>
          <li className="navbar-item"><Link to='/charts'>Charts</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
