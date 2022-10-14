import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />

    <Intro />
  </React.StrictMode>
);
