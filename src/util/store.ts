import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "../reducers/PaginationReducer";

export const store = configureStore({
  reducer: {
    pagination: PaginationReducer,
  },
});
