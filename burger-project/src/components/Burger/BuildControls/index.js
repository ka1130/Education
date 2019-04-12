import React from "react";
import BuildControl from "components/Burger/BuildControls/BuildControl";
import styles from "./BuildControls.module.scss";

const controls = [
  { type: "salad", label: "Salad" },
  { type: "meat", label: "Meat" },
  { type: "cheese", label: "Cheese" },
  { type: "bacon", label: "Bacon" }
];

const BuildControls = ({ onIngredientAdd, onIngredientRemove }) => {
  return (
    <div className={styles.buildControls}>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          onIngredientAdd={() => onIngredientAdd(ctrl.type)}
          onIngredientRemove={() => onIngredientRemove(ctrl.type)}
        />
      ))}
    </div>
  );
};

export default BuildControls;
