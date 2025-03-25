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
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-md hover:bg-gray-400 cursor-pointer ${
                  isActive
                    ? "bg-gray-300 text-white border-l-4 border-[#E8B40A]"
                    : ""
                }`
              }
            >
              <Home size={20} />
              <span>DashBoard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payment"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer"
            >
              <ShoppingCart size={20} />
              <span>Transactions</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reports"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer"
            >
              <Settings size={20} />
              <span>Reports</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
