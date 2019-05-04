import React from "react";
import { Link, Route } from "react-router-dom";
import Users from "./components/Users";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">Users</Link>
        <Link to="/pizza">Pizza</Link>
      </div>
      <div>
        <Route exact path="/" component={Users} />
        <Route exact path="/pizza" component={Pizza} />
      </div>
    </div>
  );
};

export default App;
