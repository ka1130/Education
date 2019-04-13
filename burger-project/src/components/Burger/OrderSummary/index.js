import React from "react";

const OrderSummary = props => {
  const { ingredients } = props;
  return (
    <>
      <h3>Your Order</h3>
      <p>You ordered a burger with the following ingredients:</p>
    </>
  );
};

export default OrderSummary;
