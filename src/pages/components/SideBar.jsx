import React from "react";
import { Home, ShoppingCart, Settings } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="bg-[#fff] text-[616765] h-screen w-64 p-4 fixed left-0 top-0 shadow-lg">
      <nav className="pt-12">
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/dashboard"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer"
            >
              <Home size={20} />
              <span>DashBoard</span>
            </NavLink>
          </li>
          <li
            className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate("/products")}
          >
            <ShoppingCart size={20} />
            <span>Products</span>
          </li>
          <li
            className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate("/settings")}
          >
            <Settings size={20} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
