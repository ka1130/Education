import * as actions from "redux/actions/types";

export const addIngredient = ingredient => ({
  type: actions.ADD_INGREDIENT,
  payload: ingredient
});

export const removeIngredient = ingredient => ({
  type: actions.REMOVE_INGREDIENT,
  payload: ingredient
});

export const initIngredients = () => ({ type: actions.INIT_INGREDIENTS });
