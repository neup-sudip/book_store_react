import { takeLatest, all } from "redux-saga/effects";
import { sagaActionTypes } from "./actions.js";
import { getUserProfile } from "./userSaga.js";
import { getCart } from "./cartSaga.js";

function* watchGeneralRequest() {
  yield takeLatest(sagaActionTypes.GET_USER_PROFILE, getUserProfile);
  yield takeLatest(sagaActionTypes.GET_CART, getCart);
}
export default function* rootSaga() {
  yield all([watchGeneralRequest()]);
}
