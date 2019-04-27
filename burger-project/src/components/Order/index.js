import React from "react";
import uuidv4 from "uuid/v4";
import styles from "./Order.module.scss";

const Order = ({ order }) => {
  const { ingredients, price } = order;
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {Object.entries(ingredients).map(ing => (
          <li key={uuidv4()}>{`${ing[0]} (${ing[1]})`}</li>
        ))}
      </ul>
      <p>
        Price: <strong>USD {price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
