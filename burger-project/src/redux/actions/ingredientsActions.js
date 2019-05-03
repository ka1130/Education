import * as actions from "redux/actions/types";
import orders from "apis/orders";

export const addIngredient = ingredient => ({
  type: actions.ADD_INGREDIENT,
  payload: ingredient
});

export const removeIngredient = ingredient => ({
  type: actions.REMOVE_INGREDIENT,
  payload: ingredient
});

export const initIngredients = () => async dispatch => {
  try {
    const response = await orders.get("/ingredients.json");
    dispatch({ type: actions.SET_INGREDIENTS, payload: response.data });
  } catch (error) {
    dispatch({ type: actions.FETCH_INGREDIENTS_FAILED, payload: error });
  }
};
