import React from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "components/Order/CheckoutSummary";
import ContactData from "components/Checkout/ContactData";

const handleCheckoutCancel = history => history.goBack();

const handleCheckoutContinue = (history, ingredients) => {
  console.log("history", history);
  console.log("ingredients", ingredients);
  history.push({
    pathname: "/checkout/contact-data",
    state: ingredients
  });
};

const Checkout = props => {
  const { history, location, match } = props;
  // const { ingredients, price } = location.state;
  // console.log(props);
  const ingredients = props.history.location.state;
  console.log(ingredients);
  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutContinue={() => handleCheckoutContinue(history, ingredients)}
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
