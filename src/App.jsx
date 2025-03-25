import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import {UsernamePage, PasswordPage} from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import "./App.css";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <div className=" w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UsernamePage />} />
          <Route path="/login/password" element={<PasswordPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/" element={<UsernamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
