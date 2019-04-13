import React from "react";
import styles from "./BuildControl.module.scss";

const BuildControl = ({
  label,
  onIngredientAdd,
  onIngredientRemove,
  disabled
}) => {
  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{label}</div>
      <button
        className={styles.less}
        onClick={onIngredientRemove}
        disabled={disabled}
      >
        Less
      </button>
      <button className={styles.more} onClick={onIngredientAdd}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
