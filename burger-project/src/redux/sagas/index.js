import { all, takeEvery, takeLatest } from "redux-saga/effects";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authSaga,
  checkAuthStatusSaga
} from "redux/sagas/authSagas";
import { initIngredientsSaga } from "redux/sagas/ingredientsSagas";
import { purchaseBurgerSaga, fetchOrdersSaga } from "redux/sagas/ordersSagas";
import * as actions from "redux/actions/types";

export function* watchAuth() {
  yield all([
    takeEvery(actions.LOGOUT_INIT, logoutSaga),
    // run logoutSaga whenever LOGOUT_INIT occurs
    takeEvery(actions.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actions.AUTH_USER, authSaga),
    takeEvery(actions.AUTH_CHECK_STATE, checkAuthStatusSaga)
  ]);
}

export function* watchIngredients() {
  yield takeEvery(actions.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrders() {
  yield takeLatest(actions.PURCHASE_BURGER, purchaseBurgerSaga);
}

export function* watchFetchOrders() {
  yield takeEvery(actions.FETCH_ORDERS, fetchOrdersSaga);
}
