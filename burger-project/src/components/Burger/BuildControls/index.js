import React from "react";
import BuildControl from "components/Burger/BuildControls/BuildControl";
import styles from "./BuildControls.module.scss";

const controls = [
  { type: "salad", label: "Salad" },
  { type: "meat", label: "Meat" },
  { type: "cheese", label: "Cheese" },
  { type: "bacon", label: "Bacon" }
];

const BuildControls = ({
  isAuthed,
  onIngredientAdd,
  onIngredientRemove,
  onOrderClick,
  disabled,
  price,
  purchasable
}) => {
  return (
    <div className={styles.buildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          onIngredientAdd={() => onIngredientAdd(ctrl.type)}
          onIngredientRemove={() => onIngredientRemove(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button
        className={styles.orderButton}
        disabled={!purchasable && isAuthed}
        onClick={onOrderClick}
      >
        {isAuthed ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
};

export default BuildControls;
