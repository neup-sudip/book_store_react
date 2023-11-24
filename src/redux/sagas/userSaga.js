/* eslint-disable no-unused-vars */
import { call, put } from "redux-saga/effects";

import { setProfile } from "../features/user.js";

import { ApiServices } from "../../utils/httpServices.js";
const { get } = ApiServices;

export function* getUserProfile({ type, payload }) {
  try {
    const { data } = yield call(get, payload);
    yield put(setProfile(data));
  } catch (error) {
    console.log(error);
    yield put(setProfile({ data: null }));
  }
}