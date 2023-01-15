import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { z } from "zod";

export const zodFlightAirlinesShema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    country: z.string(),
    logo: z.string(),
    slogan: z.string(),
    head_quaters: z.string(),
    website: z.string(),
    established: z.string(),
  })
);

export type FlightAirlinesState = z.infer<typeof zodFlightAirlinesShema>;

export const flightSlice = createSlice({
  name: "flight",
  initialState: [] as FlightAirlinesState,
  reducers: {
    storeFlightData: (state, action: PayloadAction<FlightAirlinesState>) => {
      state.push(...action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeFlightData } = flightSlice.actions;

export const flightSliceReducer = flightSlice.reducer;
