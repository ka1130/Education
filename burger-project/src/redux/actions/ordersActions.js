import * as actions from "redux/actions/types";
import orders from "apis/orders";

export const initPurchase = () => ({ type: actions.PURCHASE_INIT });

export const purchaseBurgerSuccess = (id, orderData) => ({
  type: actions.PURCHASE_BURGER_SUCCESS,
  payload: { id, orderData }
});

export const purchaseBurger = orderData => async dispatch => {
  dispatch({ type: actions.PURCHASE_BURGER_BEGIN });
  try {
    const response = await orders.post("/orders.json", orderData);
    dispatch(purchaseBurgerSuccess(response.data.name, orderData));
  } catch (error) {
    dispatch({ type: actions.PURCHASE_BURGER_FAILED, payload: error });
  }
};

export const fetchOrders = () => async dispatch => {
  dispatch({ type: actions.FETCH_ORDERS_INIT });
  try {
    const response = await orders.get("/orders.json");
    let ordersArr = Object.keys(response.data).map(key => {
      return { ...response.data[key], id: key };
    });
    dispatch({ type: actions.FETCH_ORDERS_SUCCESS, payload: ordersArr });
  } catch (error) {
    dispatch({ type: actions.FETCH_ORDERS_FAILED, payload: error });
  }
};
