import React from "react";
import Pizza from "../assets/pizza.jpg";
import styles from "./PizzaImage.css";

const PizzaImage = props => {
  return (
    <div className={styles.wrapper}>
      <img src={Pizza} lassName={styles.img} />
    </div>
  );
};

export default PizzaImage;
