import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS
} from "redux/actions/types";
import orders from "apis/orders";

export const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  payload: ingredient
});

export const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  payload: ingredient
});

export const initIngredients = () => async (dispatch, getState) => {
  try {
    const response = await orders.get("/ingredients.json");
    console.log(getState());
    dispatch({ type: SET_INGREDIENTS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
