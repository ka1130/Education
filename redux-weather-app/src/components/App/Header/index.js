import React from 'react';
import Nav from 'components/App/Header/Nav';

const Header = props => {
  return (
    <heaeder>
      <h3>Your weather from {props.city}</h3>
      <Nav />
    </heaeder>
  );
}

export default Header;
