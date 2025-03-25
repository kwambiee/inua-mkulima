import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { UsernamePage, PasswordPage } from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import { ToastContainer, toast } from "react-toastify";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import SuccessPage from "./pages/PaymentSuccess";
import Receipt from "./pages/Receipt";
import LogoutPage from "./pages/LogOutPage";

function App() {
  return (
    <div className=" w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UsernamePage />} />
          <Route path="/login/password" element={<PasswordPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <DashBoard />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectedRoutes>
                <PaymentPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/payment-success"
            element={
              <ProtectedRoutes>
                <SuccessPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <DashBoard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/receipt"
            element={
              <ProtectedRoutes>
                <Receipt />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
