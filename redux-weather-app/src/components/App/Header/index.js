import React from 'react';
import Nav from 'components/App/Header/Nav';

const Header = props => {
  return (
    <header>
      <h3>Your weather from {props.city}</h3>
      <Nav />
    </header>
  );
}

export default Header;
