/* eslint-disable no-unused-vars */
import { call, put } from "redux-saga/effects";

import { setCart } from "../features/cart.js";

import { ApiServices } from "../../utils/httpServices.js";
const { get } = ApiServices;

export function* getCart({ type, payload }) {
  try {
    const { data } = yield call(get, payload);
    yield put(setCart(data));
  } catch (error) {
    console.log(error);
    yield put(setCart({ data: [] }));
  }
}
