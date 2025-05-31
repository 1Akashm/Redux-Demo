import { createSlice } from "@reduxjs/toolkit";

let initialState = 0;

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented: (state) => state + 1,
  },
});

//export actions
export const { incremented } = CounterSlice.actions;

//export reducer
export default CounterSlice.reducer;
