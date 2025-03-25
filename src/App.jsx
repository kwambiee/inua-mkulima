import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import {UsernamePage, PasswordPage} from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import PaymentPage from "./pages/PaymentPage";
import "./App.css";

function App() {
  return (
    <div className="container min-h-screen w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UsernamePage />} />
          <Route path="/login/password" element={<PasswordPage />} />
          <Route path="/dashboard" element={<ProductPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/" element={<UsernamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
