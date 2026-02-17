import React, { useState } from "react";
import SideNav from "../SideNav";
import { BellRing, Menu } from "lucide-react";
import { Link, Outlet } from "react-router-dom"; // ✅ Correct import

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex gap-1 h-screen overflow-hidden bg-white relative">
      {/* Sidebar */}
      <SideNav isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Mobile Header */}
        <header className="sticky z-40 top-0 left-0 w-full px-6 py-4 bg-white shadow-soft flex items-center justify-between">
          <Link
            to="/"
            className="text-base font-semibold flex gap-1 items-center"
          >
            <img
              src="/icons/mgccapital.svg"
              alt="mgccapital Brandlogo"
              className="w-[100px]"
            />
          </Link>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          <button
            className="hidden md:flex"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <BellRing size={18} className="text-gray-800" />
          </button>
        </header>

        {/* Dynamic Nested Pages Render Here */}
        <main className="flex-1 p-4">
          <Outlet /> {/* ✅ Renders AllBlogs, ManageBlogs, etc */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
