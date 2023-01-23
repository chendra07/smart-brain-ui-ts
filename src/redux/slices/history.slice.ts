import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type HistoryState = {
  historyid: number;
  imageurl: string;
  date: Date;
  userid: number;
  isdeleted: boolean;
}[];

export const historySlice = createSlice({
  name: "history",
  initialState: null as HistoryState | null,
  reducers: {
    addHistory: (state, action: PayloadAction<HistoryState>) => {
      state = action.payload;
    },
    deleteAllHistory: (state) => {
      state = null;
    },
    deleteSelectedHistory: (state, action: PayloadAction<number[]>) => {
      if (state) {
        state.filter((data) => !action.payload.includes(data.historyid));
      }
    },
  },
});

export const { addHistory, deleteAllHistory, deleteSelectedHistory } =
  historySlice.actions;

export const historySliceReducer = historySlice.reducer;
