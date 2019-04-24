import React, { useState } from "react";
import CheckoutSummary from "components/Order/CheckoutSummary";

const initialIngredients = {
  salad: 1,
  cheese: 1,
  meat: 1,
  bacon: 1
};

const Checkout = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);
  return (
    <div>
      <CheckoutSummary ingredients={ingredients} />
    </div>
  );
};

export default Checkout;
