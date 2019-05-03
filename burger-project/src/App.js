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

const App = ({ checkAuthStatus, isAuthed }) => {
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const renderRoutes = () => {
    if (isAuthed) {
      return (
        <>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout} />
        </>
      );
    } else {
      return (
        <>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/auth" component={Auth} />
        </>
      );
    }
  };

  return (
    <BrowserRouter>
      <Layout>{renderRoutes()}</Layout>
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  isAuthed: state.auth.token !== null
});

export default connect(
  mapStateToProps,
  { checkAuthStatus }
)(App);
