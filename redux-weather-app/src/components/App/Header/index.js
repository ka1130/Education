import React from 'react';
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <header>
      <h2 className="title">Your weather for {props.city}</h2>
      <nav>
        <ul>
          <li><Link to='/'>Hourly details</Link></li>
          <li><Link to='/charts'>Charts</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
