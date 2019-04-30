import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "redux/actions/types";
import { combineReducers } from "redux";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const initialIngredients = {
  meat: 0,
  bacon: 0,
  cheese: 0,
  salad: 0
};

const ingredients = (state = initialIngredients, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return { ...state, [action.payload]: state[action.payload] + 1 };
    case REMOVE_INGREDIENT:
      return { ...state, [action.payload]: state[action.payload] - 1 };
    default:
      return state;
  }
};

const price = (state = 0, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return state + INGREDIENT_PRICES[action.payload];
    case REMOVE_INGREDIENT:
      return state - INGREDIENT_PRICES[action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  ingredients,
  price
});
