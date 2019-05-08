import * as actions from "redux/actions/types";
import orders from "apis/orders";

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

export const fetchOrders = () => async (dispatch, getState) => {
  dispatch({ type: actions.FETCH_ORDERS_INIT });
  try {
    const { token, userID } = getState().auth;
    const queryParams = `?auth=${token}&orderBy="userID"&equalTo="${userID}"`;
    const response = await orders.get(`/orders.json${queryParams}`);
    let ordersArr = Object.keys(response.data).map(key => {
      return { ...response.data[key], id: key };
    });
    dispatch({ type: actions.FETCH_ORDERS_SUCCESS, payload: ordersArr });
  } catch (error) {
    dispatch({ type: actions.FETCH_ORDERS_FAILED, payload: error });
  }
};
