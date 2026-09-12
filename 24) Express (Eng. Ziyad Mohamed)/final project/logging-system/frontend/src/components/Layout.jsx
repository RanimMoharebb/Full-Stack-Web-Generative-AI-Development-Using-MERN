import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Boxes, FileText, LogOut } from "lucide-react";
import { logout } from "../utils/auth";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navBtn = (to, icon, label) => {
    const active = location.pathname === to;

    return (
      <Link
        to={to}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
        ${
          active
            ? "bg-blue-600 text-white shadow-lg"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-[1.02]"
        }`}
      >
        {icon}
        {label}
      </Link>
    );
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">

      {/* SIDEBAR */}
      <div className="w-72 p-4">
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-5 h-full flex flex-col justify-between shadow-2xl">

          <div>
            <h1 className="text-xl font-bold text-blue-400 mb-8">
              LogSystem
            </h1>

            <div className="flex flex-col gap-3">
              {navBtn("/dashboard", <LayoutDashboard size={18} />, "Dashboard")}
              {navBtn("/projects", <Boxes size={18} />, "Projects")}
              {navBtn("/logs", <FileText size={18} />, "Logs")}
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">
        <div className="min-h-full bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-6 shadow-2xl">
          {children}
        </div>
      </div>

    </div>
  );
}

export default Layout;