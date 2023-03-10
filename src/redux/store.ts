import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { counterSliceReducer } from "./slices/counter.slice";
import { flightSliceReducer } from "./slices/flight.slice";

const rootReducers = combineReducers({
  counter: counterSliceReducer,
  flight: flightSliceReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
