import * as actions from "redux/actions/types";
import orders from "apis/orders";

export const purchaseBurgerSuccess = (id, orderData) => ({
  type: actions.PURCHASE_BURGER_SUCCESS,
  payload: { id, orderData }
});

export const purchaseBurgerFailed = error => ({
  type: actions.PURCHASE_BURGER_FAILED,
  payload: error
});

export const purchaseBurger = orderData => async dispatch => {
  dispatch({ type: actions.PURCHASE_BURGER_BEGIN });
  try {
    const response = await orders.post("/orders.json", orderData);
    dispatch(purchaseBurgerSuccess(response.data.name, orderData));
  } catch (error) {
    dispatch(purchaseBurgerFailed(error));
  }
};
