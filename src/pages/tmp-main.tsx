import React from "react";
import { Outlet } from "react-router-dom";

export default function TmpMain() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
