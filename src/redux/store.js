import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSageMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootSaga from "./sagas";
import userReducer from "./features/user.js";
import cartReducer from "./features/cart.js";

const sagaMiddleware = createSageMiddleware();

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    ),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
