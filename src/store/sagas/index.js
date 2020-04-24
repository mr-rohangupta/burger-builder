import { takeEvery, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { purchaseBurgerSaga, fetchOrdersSaga } from "./order";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga,
} from "./auth";
import { initIngredientsSaga } from "./burgerBuilder";

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_INITIATIVE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    //This is the saga method for login authUserSaga
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
  ]);
}

export function* watchBurger() {
  //check sagas/burgerBuilder for initIngredientsSaga
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
