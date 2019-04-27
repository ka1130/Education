import React from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "components/CheckoutSummary";
import ContactData from "components/Checkout/ContactData";

const handleCheckoutCancel = history => history.goBack();

const handleCheckoutContinue = (history, ingredients, price) => {
  history.push({
    pathname: "/checkout/contact-data",
    state: { ingredients, price }
  });
};

const Checkout = props => {
  const { history, match } = props;
  const { ingredients, price } = props.history.location.state;
  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutContinue={() =>
          handleCheckoutContinue(history, ingredients, price)
        }
        onCheckoutCancel={() => handleCheckoutCancel(history)}
      />
      <Route
        path={`${match.path}/contact-data`}
        render={() => <ContactData {...props} />}
      />
    </div>
  );
};

export default Checkout;
