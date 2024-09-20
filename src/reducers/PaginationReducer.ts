import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: 0,
};

export const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
    resetStart: (state) => {
      state.start = 0;
    },
  },
});

export const { setStart, resetStart } = PaginationSlice.actions;
export default PaginationSlice.reducer;
