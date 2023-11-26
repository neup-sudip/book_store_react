import { takeLatest, all } from "redux-saga/effects";
import { sagaActionTypes } from "./actions.js";
import { getUserProfile, handleLogout } from "./userSaga.js";
import { getCart, setCartData } from "./cartSaga.js";

function* watchGeneralRequest() {
  yield takeLatest(sagaActionTypes.LOGOUT, handleLogout);
  yield takeLatest(sagaActionTypes.GET_USER_PROFILE, getUserProfile);
  yield takeLatest(sagaActionTypes.GET_CART, getCart);
  yield takeLatest(sagaActionTypes.SET_CART, setCartData);
}
export default function* rootSaga() {
  yield all([watchGeneralRequest()]);
}
