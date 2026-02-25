import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HiOutlineClipboardList,
  HiOutlineChartBar,
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineViewGrid,
} from 'react-icons/hi';

const sidebarItems = [
  { label: 'Dashboard', icon: HiOutlineViewGrid, path: '/dashboard' },
  { label: 'My Tests', icon: HiOutlineClipboardList, path: '/my-tests' },
  { label: 'Performance Reports', icon: HiOutlineChartBar, path: '/reports' },
  { label: 'Profile', icon: HiOutlineUser, path: '/profile' },
  { label: 'Logout', icon: HiOutlineLogout, path: '/logout' },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col justify-between fixed top-16 bottom-0 left-0 z-40">
      <nav className="flex flex-col py-4">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? 'text-blue-600 bg-blue-50 border-r-3 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="text-lg" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom sidebar links */}
      <div className="border-t border-gray-200 py-4">
        <Link
          to="/profile"
          className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
        >
          <HiOutlineUser className="text-lg" />
          Profile
        </Link>
        <Link
          to="/logout"
          className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
        >
          <HiOutlineLogout className="text-lg" />
          Logout
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
