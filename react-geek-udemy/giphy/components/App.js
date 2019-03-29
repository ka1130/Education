import React from "react";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";

import Navigation from "components/Navigation";

const App = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default App;
