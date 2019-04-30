import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CheckoutSummary from "components/CheckoutSummary";
import ContactData from "components/Checkout/ContactData";

const Checkout = ({ burger, history, match }) => {
  const { ingredients } = burger;

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutContinue={() => history.push("/checkout/contact-data")}
        onCheckoutCancel={() => history.goBack()}
      />
      <Route path={`${match.path}/contact-data`} component={ContactData} />
    </div>
  );
};

const mapStateToProps = state => ({ burger: state.burger });

export default connect(mapStateToProps)(Checkout);
