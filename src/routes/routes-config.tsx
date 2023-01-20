import React from "react";
import { Routes, Route } from "react-router-dom";
import { TmpMain, PgAuth, PgHome } from "../pages";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<PgAuth />} />
      <Route path="resource" element={<TmpMain />}>
        <Route path="home" element={<PgHome />} />
        <Route path="settings" element={<PgHome />} />
      </Route>
      {/* <Route path="*" element={<p>404 not found</p>} /> */}
    </Routes>
  );
}

export default RouterConfig;
