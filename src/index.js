import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import JubImage from "./imageSelect";
import Banner from "./topBanner";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div id="container">
      <Banner />
      <JubImage />
    </div>
  </StrictMode>
);
