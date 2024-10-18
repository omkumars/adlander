import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Adlander } from "./screens/Adlander";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Adlander />);
