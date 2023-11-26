export const sagaActionTypes = {
  GET_USER_PROFILE: "GET_USER_PROFILE",
  GET_CART: "GET_CART",
  SET_CART: "SET_CART",
  LOGOUT: "LOGOUT",
};

export const GET_USER_PROFILE = (data) => ({
  type: sagaActionTypes.GET_USER_PROFILE,
  payload: data,
});

export const GET_CART = (data) => ({
  type: sagaActionTypes.GET_CART,
  payload: data,
});

export const SET_CART = (data) => ({
  type: sagaActionTypes.SET_CART,
  payload: data,
});

export const LOGOUT = () => ({
  type: sagaActionTypes.LOGOUT,
  payload: null,
});
