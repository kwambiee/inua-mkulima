import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import { toast } from "react-toastify";

const LogoutPage = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  const confirmLogout = () => {
    logOutUser();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Log Out?</h2>
        <div className="mb-4">
          <img
            src="/logout-icon.png"
            alt="Logout Icon"
            className="mx-auto w-12 h-12"
          />
        </div>
        <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 border border-black rounded-lg"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-lg"
            onClick={confirmLogout}
          >
            Yes, log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
