import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "redux/actions/types";
import { combineReducers } from "redux";

const initialIngredients = {
  meat: 0,
  bacon: 0,
  cheese: 0,
  salad: 0
};

const ingredients = (state = initialIngredients, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_INGREDIENT:
      return { ...state, [action.payload]: state[action.payload] + 1 };
    case REMOVE_INGREDIENT:
      return { ...state, [action.payload]: state[action.payload] + 1 };
    default:
      console.log("ok");
      return state;
  }
};

const price = (state = 0, action) => 10;

export default combineReducers({
  ingredients,
  price
});
