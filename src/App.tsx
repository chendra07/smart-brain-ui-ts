import React from "react";
import RouterConfig from "./routes/routes-config";

import { ParticleBackground } from "./components";

export default function App() {
  return (
    <>
      <ParticleBackground />
      <div style={{ position: "relative" }}>
        <RouterConfig />
      </div>
    </>
  );
}
