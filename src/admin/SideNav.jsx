import React from "react";
import { LogOut, LayoutDashboard, FileText, PlusCircle, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const SideNav = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("editBlog");
    navigate("/admin");
  };

  const Bloglinks = [
    { label: "All Blogs", icon: FileText, path: "/admin/allblogs" },
    { label: "Manage Blogs", icon: PlusCircle, path: "/admin/manageblogs" },
  ];

  const Testimoniallinks = [
    {
      label: "All Testimonials",
      icon: FileText,
      path: "/admin/allTestimonials",
    },
    {
      label: "Manage Testimonials",
      icon: PlusCircle,
      path: "/admin/manageTestimonials",
    },
  ];

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed z-50 top-0 left-0 w-64 h-full bg-white text-primary-800 p-4 flex flex-col justify-between transition-transform duration-300 shadow-soft ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:h-screen`}
      >
        <div>
          <div className="pb-6">
            <div className="flex items-center justify-between">
              <h2
                style={{ fontFamily: "Marcellus" }}
                className="px-2 py-2 text-sm uppercase tracking-wide font-semibold"
              >
                Main Menu
              </h2>

              <button className="md:hidden" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-full hover:bg-primary-50 mb-1 ${
                    isActive
                      ? "bg-primary-700 text-white hover:text-primary-900"
                      : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
              <LayoutDashboard size={18} />
              Admin Dashboard
            </NavLink>
          </div>

          <div className="grid">
            <h2
              style={{ fontFamily: "Marcellus" }}
              className="px-2 py-2 text-sm uppercase tracking-wide font-semibold"
            >
              Blogs
            </h2>
            {Bloglinks.map(({ label, icon: Icon, path }) => (
              <NavLink
                to={path}
                key={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-full hover:bg-primary-50 mb-1 ${
                    isActive
                      ? "bg-primary-700 text-white hover:text-primary-900"
                      : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                {label}
              </NavLink>
            ))}
          </div>

          <div className="grid mt-8">
            <h2
              style={{ fontFamily: "Marcellus" }}
              className="px-2 py-2 text-sm uppercase tracking-wide font-semibold"
            >
              Testimonials
            </h2>
            {Testimoniallinks.map(({ label, icon: Icon, path }) => (
              <NavLink
                to={path}
                key={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-full hover:bg-primary-50 mb-1 ${
                    isActive
                      ? "bg-primary-700 text-white hover:text-primary-900"
                      : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-primary-50 bg-white border border-primary-700 transition-all duration-300"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>
    </>
  );
};

export default SideNav;
