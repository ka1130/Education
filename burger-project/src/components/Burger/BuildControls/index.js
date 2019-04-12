import React from "react";
import BuildControl from "components/Burger/BuildControls/BuildControl";
import styles from "./BuildControls.module.scss";

const controls = [
  { type: "salad", label: "Salad" },
  { type: "meat", label: "Meat" },
  { type: "cheese", label: "Cheese" },
  { type: "bacon", label: "Bacon" }
];

const BuildControls = () => {
  return (
    <div className={styles.buildControls}>
      {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};

export default BuildControls;
