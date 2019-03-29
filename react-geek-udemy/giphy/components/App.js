import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import SearchForm from "components/SearchForm";
import SearchResults from "components/SearchResults";
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
