import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context";

const Navbar = () => {

    const { user, logOutUser } = useAuth();
  const handleLogout = () => {
    console.log("Logging out");
    localStorage.removeItem("token");
    logOutUser();
    toast.success("Logged out successfully");
  };
  console.log(user, "user");

  return (
    <nav className="bg-green-900 text-white px-6 py-3 flex justify-between items-center w-full shadow-md fixed inset-x-0 top-0 z-10">
      {/* Left side: Program Title */}
      <h1 className="text-lg font-bold">Inua Mkulima Subsidy Program</h1>

      {/* Right side: User Info & Logout */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold">
          Logged In As: <span className="uppercase">{user}</span>
        </span>
        <button
          className="bg-white text-green-900 px-3 py-1 rounded flex items-center gap-2 border border-white hover:bg-gray-100"
          onClick={handleLogout()}
        >
          <span>🔄</span> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
