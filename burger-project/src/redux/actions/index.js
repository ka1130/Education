import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "redux/actions/types";

export const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  payload: ingredient
});

export const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  payload: ingredient
});
