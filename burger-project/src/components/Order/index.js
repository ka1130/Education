import React, { useState } from "react";
import styles from "./Order.module.scss";

const Order = () => {
  return (
    <div className={styles.wrapper}>
      <p>Ingredients: Salad(1)</p>
      <p>
        Price: <strong>USD 5.4</strong>
      </p>
    </div>
  );
};

export default Order;
