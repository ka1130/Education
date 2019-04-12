import React from "react";
import uuidv4 from "uuid/v4";
import BurgerIngredient from "components/Burger/BurgerIngredient";
import styles from "./Burger.module.css";

const Burger = ({ ingredients }) => {
  const renderContent = obj => {
    const sum = Object.values(obj).reduce((total, amount) => total + amount);
    if (!sum) return <p>Start adding ingredients</p>;

    if (Object.values(obj).some(el => el < 0)) return;

    return Object.entries(obj).map(entry =>
      Array.from(Array(entry[1])).map(() => (
        <BurgerIngredient key={uuidv4()} type={entry[0]} />
      ))
    );
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
