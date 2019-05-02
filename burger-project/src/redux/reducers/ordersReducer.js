import { combineReducers } from "redux";
import * as actions from "redux/actions/types";

const orders = (state = [], action) => {
  switch (action.type) {
    case actions.PURCHASE_BURGER_SUCCESS:
      const newOrder = { ...action.payload.orderData, id: [action.payload.id] };
      return [...state, newOrder];
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case actions.PURCHASE_BURGER_BEGIN:
      return true;
    case actions.PURCHASE_BURGER_SUCCESS:
    case actions.PURCHASE_BURGER_FAILED:
      return false;
    default:
      return state;
  }
};

const purchased = (state = false, action) => {
  switch (action.type) {
    case actions.PURCHASE_INIT:
      return false;
    case actions.PURCHASE_BURGER_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  orders,
  loading,
  purchased
});
