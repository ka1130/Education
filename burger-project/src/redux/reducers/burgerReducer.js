import * as actions from "redux/actions/types";
import { combineReducers } from "redux";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const building = (state = false, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
    case actions.REMOVE_INGREDIENT:
      return true;
    case actions.SET_INGREDIENTS:
      return false;
    default:
      return state;
  }
};

const ingredients = (state = null, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return { ...state, [action.payload]: state[action.payload] + 1 };
    case actions.REMOVE_INGREDIENT:
      return { ...state, [action.payload]: state[action.payload] - 1 };
    case actions.SET_INGREDIENTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const price = (state = 0, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return state + INGREDIENT_PRICES[action.payload];
    case actions.REMOVE_INGREDIENT:
      return state - INGREDIENT_PRICES[action.payload];
    default:
      return state;
  }
};

const error = (state = false, action) => {
  switch (action.type) {
    case actions.FETCH_INGREDIENTS_FAILED:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  building,
  ingredients,
  price,
  error
});
