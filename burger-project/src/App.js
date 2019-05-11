import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthStatus } from "redux/actions/authActions";
// import Auth from "components/Auth";
import BurgerBuilder from "components/BurgerBuilder";
import Layout from "components/Layout";
// import Checkout from "components/Checkout";
// import Orders from "components/Orders";
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
          <Route path="/checkout" render={() => <Checkout />} />
          <Route path="/orders" render={() => <Orders />} />
          <Route path="/logout" component={Logout} />
        </>
      );
    } else {
      return (
        <>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/auth" render={() => <Auth />} />
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

const mapDispatchToProps = dispatch => ({
  checkAuthStatus: () => dispatch(checkAuthStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
