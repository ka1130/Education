import React from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "components/Order/CheckoutSummary";
import ContactData from "components/Checkout/ContactData";

const handleCheckoutCancel = history => history.goBack();

const handleCheckoutContinue = history => {
  history.replace("/checkout/contact-data");
};

const Checkout = props => {
  const { history, location, match } = props;
  const ingredients = location.state;
  console.log(ingredients, "from checkout");
  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutContinue={() => handleCheckoutContinue(history)}
        onCheckoutCancel={() => handleCheckoutCancel(history)}
      />
      <Route path={`${match.path}/contact-data`} component={ContactData} />
    </div>
  );
};

export default Checkout;
