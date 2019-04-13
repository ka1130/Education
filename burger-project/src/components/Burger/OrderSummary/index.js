import React from "react";
import uuidv4 from "uuid/v4";

const OrderSummary = ({ ingredients }) => {
  const summary = Object.keys(ingredients).map(key => (
    <li key={uuidv4()}>
      {key.toUpperCase()}: {ingredients[key]}
    </li>
  ));
  return (
    <>
      <h3>Your Order</h3>
      <p>You ordered a burger with the following ingredients:</p>
      <ul>{summary}</ul>
      <p>Continue to checkout</p>
    </>
  );
};

export default OrderSummary;
