import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

//redux
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { storeFlightData } from "../redux/slices/flight.slice";
import { decrement, increment } from "../redux/slices/counter.slice";

//requests
import { httpgetAllFlight } from "../requests/flight";

export default function PgHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    httpgetAllFlight().then((data) => {
      dispatch(storeFlightData(data));
    });
  }, []);

  //Navigate to auth if user not logged in yet
  // if (true) {
  //   return <Navigate to="/auth" />;
  // }

  return <div>HOME</div>;
}
