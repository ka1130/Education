import React from 'react';

const Header = props => {
  return (
    <heaeder>
      <h2 className="title">Your weather for {props.city}</h2>
    </heaeder>
  );
}

export default Header;
