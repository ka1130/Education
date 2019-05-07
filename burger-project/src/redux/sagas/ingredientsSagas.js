import orders from "apis/orders";
import { put } from "redux-saga/effects";
import * as actionTypes from "redux/actions/types";

export function* initIngredientsSaga(action) {
  try {
    const response = yield orders.get("/ingredients.json");
    yield put({ type: actionTypes.SET_INGREDIENTS, payload: response.data });
  } catch (error) {
    yield { type: actionTypes.FETCH_INGREDIENTS_FAILED, payload: error };
  }
}
