import React, { useState, useEffect } from "react";
import Burger from "components/Burger";
import BuildControls from "components/Burger/BuildControls";

const initialIngredients = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0
};

const BurgerBuilder = props => {
  const [ingredients, setIngredients] = useState(initialIngredients);
  console.log(ingredients);
  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls />
    </>
  );
};

export default BurgerBuilder;
