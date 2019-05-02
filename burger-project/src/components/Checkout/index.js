import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { initPurchase } from "redux/actions/ordersActions";
import CheckoutSummary from "components/CheckoutSummary";
import ContactData from "components/Checkout/ContactData";

const Checkout = ({ burger, history, match, initPurchase, orders }) => {
  useEffect(() => {
    initPurchase();
  }, []);

  const { ingredients } = burger;
  const { purchased } = orders;

  const renderSummary = () => {
    if (!ingredients || purchased) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <CheckoutSummary
          ingredients={ingredients}
          onCheckoutContinue={() => history.push("/checkout/contact-data")}
          onCheckoutCancel={() => history.goBack()}
        />
        <Route path={`${match.path}/contact-data`} component={ContactData} />
      </>
    );
  };

  return <div>{renderSummary()}</div>;
};

const mapStateToProps = state => ({
  burger: state.burger,
  orders: state.orders
});

export default connect(
  mapStateToProps,
  { initPurchase }
)(Checkout);
