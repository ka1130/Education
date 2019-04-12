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
  const handleIngredientAdd = type => {
    console.log("adding", type);
    setIngredients({ ...ingredients, [type]: ingredients[type] + 1 });
  };

  const handleIngredientRemove = type => {
    console.log("removing", type);
    setIngredients({ ...ingredients, [type]: ingredients[type] - 1 });
  };

  console.log(ingredients);
  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls
        onIngredientAdd={handleIngredientAdd}
        onIngredientRemove={handleIngredientRemove}
      />
    </>
  );
};

export default BurgerBuilder;
