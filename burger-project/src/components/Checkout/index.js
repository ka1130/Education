import React from "react";
import CheckoutSummary from "components/Order/CheckoutSummary";

const handleCheckoutCancel = history => history.goBack();

const handleCheckoutContinue = history => {
  history.replace("/checkout/contact-data");
};

const Checkout = props => {
  const { history, location } = props;
  const ingredients = location.state;
  console.log(ingredients);
  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutContinue={() => handleCheckoutContinue(history)}
        onCheckoutCancel={() => handleCheckoutCancel(history)}
      />
    </div>
  );
};

export default Checkout;
