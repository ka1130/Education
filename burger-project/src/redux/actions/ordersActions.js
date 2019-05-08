import * as actions from "redux/actions/types";

export const initPurchase = () => ({ type: actions.PURCHASE_INIT });

export const purchaseBurgerSuccess = (id, orderData) => ({
  type: actions.PURCHASE_BURGER_SUCCESS,
  payload: { id, orderData }
});

export const purchaseBurger = (orderData, token) => ({
  type: actions.PURCHASE_BURGER,
  orderData,
  token
});

export const fetchOrders = (token, userID) => ({
  type: actions.FETCH_ORDERS,
  token,
  userID
});
