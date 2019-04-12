import React from "react";
import uuidv4 from "uuid/v4";
import BurgerIngredient from "components/Burger/BurgerIngredient";
import styles from "./Burger.module.css";

const Burger = ({ ingredients }) => {
  const renderContent = obj => {
    const sum = Object.values(obj).reduce((total, amount) => total + amount);
    if (!sum) return <p>Start adding ingredients</p>;
    return Object.keys(obj).map(el => (
      <BurgerIngredient key={uuidv4()} type={el} />
    ));
  };

  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {renderContent(ingredients)}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
