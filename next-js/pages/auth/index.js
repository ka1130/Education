import React from "react";
import User from "../../components/User";

const Auth = ({ gender }) => {
  return (
    <div>
      <h1>The auth page</h1>
      <User name="Mike" age="32" />
      <p>Gender: {gender}</p>
    </div>
  );
};

Auth.getInitialProps = context => {
  return {
    gender: "man"
  };
};

export default Auth;
