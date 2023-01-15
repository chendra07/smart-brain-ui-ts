import { axiosRequest } from "../utils/axiosRequest";
import {
  zodFlightAirlinesShema,
  FlightAirlinesState,
} from "../redux/slices/flight.slice";

export async function httpPostLogin() {
  //Do something with axios & return the data

  //just delete this code:
  return "Done!";
}

export async function httpgetAllFlight() {
  const allFlight = await axiosRequest.Get(null, "v1/airlines");

  const verifyZod = zodFlightAirlinesShema.safeParse(allFlight.data);

  if (!verifyZod.success) {
    window.alert("Invalid Data!");
    return [];
  }

  return allFlight.data as FlightAirlinesState;
}
