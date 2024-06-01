import { configureStore } from "@reduxjs/toolkit";
import PropertyReducer from "./reducer";

export const store = configureStore({
  reducer: { property: PropertyReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

