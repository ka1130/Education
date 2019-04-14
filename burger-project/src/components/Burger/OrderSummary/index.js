import React from "react";
import uuidv4 from "uuid/v4";
import Button from "components/UI/Button";

const OrderSummary = ({
  ingredients,
  onModalClose,
  onPurchaseContinue,
  price
}) => {
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
      <p>
        <strong>Total price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="danger" onClick={onModalClose}>
        CANCEL
      </Button>
      <Button btnType="success" onClick={onPurchaseContinue}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
