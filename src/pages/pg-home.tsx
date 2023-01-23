import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

//redux
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

import { deleteUser } from "../redux/slices/user.slice";
import Card from "../components/card";

export default function PgHome() {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);

  return (
    <div className="pg-home">
      <Card.Container>
        <p>Test</p>
      </Card.Container>
    </div>
  );
}
