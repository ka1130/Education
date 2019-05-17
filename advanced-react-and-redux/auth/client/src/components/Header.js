import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Redux Auth</Link>
      <Link to="/signin">Sign in</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/festure">Feature</Link>
    </div>
  );
};
export default Header;
