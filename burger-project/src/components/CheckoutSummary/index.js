import React from "react";
import Burger from "components/Burger";
import Button from "components/UI/Button";
import styles from "./CheckoutSummary.module.scss";

const CheckoutSummary = ({
  ingredients,
  onCheckoutCancel,
  onCheckoutContinue
}) => {
  return (
    <div className={styles.wrapper}>
      <h2>We hope it tastes good!</h2>
      <div className={styles.burger}>
        <Burger ingredients={ingredients} purchasable={true} />
        <Button btnType="danger" onClick={onCheckoutCancel}>
          CANCEL
        </Button>
        <Button btnType="success" onClick={onCheckoutContinue}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
