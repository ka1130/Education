import orders from "apis/orders";
import { put } from "redux-saga/effects";
import * as actionTypes from "redux/actions/types";
import { purchaseBurgerSuccess } from "redux/actions/ordersActions";

export function* purchaseBurgerSaga(action) {
  yield put({ type: actionTypes.PURCHASE_BURGER_BEGIN });
  try {
    const response = yield orders.post(
      `/orders.json?auth=${action.token}`,
      action.orderData
    );
    yield put(purchaseBurgerSuccess(response.data.name, action.orderData));
  } catch (error) {
    yield put({ type: actionTypes.PURCHASE_BURGER_FAILED, payload: error });
  }
}
