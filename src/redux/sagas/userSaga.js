/* eslint-disable no-unused-vars */
import { call, put } from "redux-saga/effects";
import { setProfile } from "../features/user.js";
import { ApiServices } from "../../utils/httpServices.js";
import { setCart } from "../features/cart.js";
const { get } = ApiServices;

export function* getUserProfile({ type, payload }) {
  try {
    const { data, success } = yield call(get, payload);
    if (success) {
      yield put(setProfile(data));
    }
  } catch (error) {
    console.log(error);
    yield put(setProfile({ data: null }));
  }
}

export function* handleLogout() {
  try {
    yield put(setProfile(null));
    yield put(setCart([]));
  } catch (error) {
    console.log(error);
  }
}
