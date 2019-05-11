import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthStatus } from "redux/actions/authActions";
import BurgerBuilder from "components/BurgerBuilder";
import Layout from "components/Layout";
import Logout from "components/Auth/Logout";

const Checkout = React.lazy(() => import("components/Checkout"));
const Orders = React.lazy(() => import("components/Orders"));
const Auth = React.lazy(() => import("components/Auth"));

const App = ({ checkAuthStatus, isAuthed }) => {
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const renderRoutes = () => {
    if (isAuthed) {
      return (
        <>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" render={props => <Checkout {...props} />} />
          <Route path="/orders" render={props => <Orders {...props} />} />
          <Route path="/logout" component={Logout} />
        </>
      );
    } else {
      return (
        <>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/auth" render={props => <Auth {...props} />} />
        </>
      );
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{renderRoutes()}</Suspense>
      </Layout>
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
