import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};