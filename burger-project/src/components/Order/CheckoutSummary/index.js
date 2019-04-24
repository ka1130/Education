import React from "react";
import Burger from "components/Burger";
import Button from "components/UI/Button";
import styles from "./CheckoutSummary.module.scss";

const CheckoutSummary = ({ ingredients }) => {
  return (
    <div className={styles.wrapper}>
      <h2>We hope it tastes good!</h2>
      <div className={styles.burger}>
        <Burger ingredients={ingredients} />
        <Button btnType="danger" onClick>
          CANCEL
        </Button>
        <Button btnType="success" onClick>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
