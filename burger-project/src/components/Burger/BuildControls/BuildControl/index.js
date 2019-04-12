import React from "react";
import styles from "./BuildControl.module.scss";

const BuildControl = ({ label, onIngredientAdd, onIngredientRemove }) => {
  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{label}</div>
      <button className={styles.less} onClick={onIngredientRemove}>
        Less
      </button>
      <button className={styles.more} onClick={onIngredientAdd}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
