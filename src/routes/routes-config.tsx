import React from "react";
import { Routes, Route } from "react-router-dom";
import { TmpMain, PgLogin, PgHome } from "../pages";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<PgLogin />} />
      <Route path="resource" element={<TmpMain />}>
        <Route path="home" element={<PgLogin />} />
        <Route path="settings" element={<PgLogin />} />
      </Route>
      {/* <Route path="*" element={<p>404 not found</p>} /> */}
    </Routes>
  );
}

export default RouterConfig;
