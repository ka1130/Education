import React from "react";
import BurgerIngredient from "components/Burger/BurgerIngredient";
import styles from "./Burger.module.css";

const Burger = props => {
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
