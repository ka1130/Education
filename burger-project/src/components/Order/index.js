import React from "react";
import styles from "./Order.module.scss";

const Order = ({ order }) => {
  const { ingredients, price } = order;
  console.log(ingredients);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {Object.entries(ingredients).map(ing => (
          <li>{`${ing[0]} (${ing[1]})`}</li>
        ))}
      </ul>
      <p>
        Price: <strong>USD {price}</strong>
      </p>
    </div>
  );
};

export default Order;
