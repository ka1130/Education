import React, { useState, useEffect } from "react";
import Burger from "components/Burger";

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
      <div>Build Controls</div>
    </>
  );
};

export default BurgerBuilder;
