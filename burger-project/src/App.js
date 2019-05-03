import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthStatus } from "redux/actions/authActions";
import Auth from "components/Auth";
import BurgerBuilder from "components/BurgerBuilder";
import Layout from "components/Layout";
import Checkout from "components/Checkout";
import Orders from "components/Orders";
import Logout from "components/Auth/Logout";

const App = ({ checkAuthStatus }) => {
  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/auth" component={Auth} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
      </Layout>
    </BrowserRouter>
  );
};

export default connect(
  null,
  { checkAuthStatus }
)(App);
