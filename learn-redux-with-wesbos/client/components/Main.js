import React from 'react';
import { Link } from 'react-router';

const Main = (props) => {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstaram</Link>
      </h1>
      {React.cloneElement(props.children, props)}
    </div>
  );
};

export default Main;
