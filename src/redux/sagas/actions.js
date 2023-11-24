export const sagaActionTypes = {
  GET_USER_PROFILE: "GET_USER_PROFILE",
  GET_CART: "GET_CART",
};

export const GET_USER_PROFILE = (data) => ({
  type: sagaActionTypes.GET_USER_PROFILE,
  payload: data,
});

export const GET_CART = (data) => ({
  type: sagaActionTypes.GET_CART,
  payload: data,
});
