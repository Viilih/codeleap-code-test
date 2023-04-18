import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { SignUp } from "../pages/SignUp";
import { MainScreen } from "../pages/MainScreen";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user/dashboard" element={<MainScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
