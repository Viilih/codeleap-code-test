import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./reset.module.scss";
import { Router } from "./routes/router";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
