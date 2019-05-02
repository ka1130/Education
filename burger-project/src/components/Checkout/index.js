import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import CheckoutSummary from "components/CheckoutSummary";
import ContactData from "components/Checkout/ContactData";

const Checkout = ({ burger, history, match, orders }) => {
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

export default connect(mapStateToProps)(Checkout);
