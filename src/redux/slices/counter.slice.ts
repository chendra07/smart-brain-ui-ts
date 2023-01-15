import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  current_number: number;
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    current_number: 0,
  } as CounterState,
  reducers: {
    increment: (state) => {
      state.current_number += 1;
    },
    decrement: (state) => {
      state.current_number -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<{ number: number }>) => {
      state.current_number += action.payload.number;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;
