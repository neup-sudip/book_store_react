import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const { payload } = action;
      state.books = payload;
    },
  },
  extraReducers: () => {},
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
