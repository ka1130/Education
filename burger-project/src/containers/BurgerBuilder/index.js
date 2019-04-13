import React, { useState, useEffect } from "react";
import Burger from "components/Burger";
import BuildControls from "components/Burger/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const initialIngredients = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [price, setPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);

  const handleIngredientAdd = type => {
    setIngredients({ ...ingredients, [type]: ingredients[type] + 1 });
    setPrice(INGREDIENT_PRICES[type] + price);
    console.log("new price: ", price);
  };

  const handleIngredientRemove = type => {
    if (ingredients[type] === 0) return;
    setIngredients({ ...ingredients, [type]: ingredients[type] - 1 });
    setPrice(INGREDIENT_PRICES[type] - price);
    console.log("new price: ", price);
  };

  console.log(ingredients);
  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls
        onIngredientAdd={handleIngredientAdd}
        onIngredientRemove={handleIngredientRemove}
        disabled={disabledInfo}
        price={price}
      />
    </>
  );
};

export default BurgerBuilder;
