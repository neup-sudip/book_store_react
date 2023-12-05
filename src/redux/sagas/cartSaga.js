/* eslint-disable no-unused-vars */
import { call, put } from "redux-saga/effects";

import { setCart } from "../features/cart.js";

import { ApiServices } from "../../utils/httpServices.js";
const { get } = ApiServices;

export function* getCart({ type, payload }) {
  try {
    const { data, success } = yield call(get, payload);
    if (success) {
      yield put(setCart(data));
    }
  } catch (error) {
    console.log(error);
    yield put(setCart({ data: [] }));
  }
}

export function* setCartData({ type, payload }) {
  try {
    yield put(setCart(payload));
  } catch (error) {
    console.log(error);
    yield put(setCart({ data: [] }));
  }
}
