import React from "react";
import { Toaster } from "react-hot-toast";
import RouterConfig from "./routes/routes-config";

import { ParticleBackground, ToasterCfg } from "./components";

export default function App() {
  return (
    <>
      <ToasterCfg />
      <ParticleBackground />
      <div style={{ position: "relative" }}>
        <RouterConfig />
      </div>
    </>
  );
}
