import React from "react";
import { useAuth } from "../../context";
import { toast } from "react-toastify";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();

const handleLogout = () => {
  navigate("/logout"); // Navigate to the logout confirmation page
};

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
          className=" text-white px-3 py-1 rounded flex items-center gap-2 border border-white hover:bg-gray-100"
          onClick={handleLogout}
        >
          <span>
            <LogOut />
          </span>{" "}
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
