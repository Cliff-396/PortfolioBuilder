import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Brand */}
      <h1 className="text-2xl font-bold text-indigo-600">NeuroBuild</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <Link
          to="/"
          className={`flex items-center gap-1 ${
            location.pathname === "/"
              ? "text-indigo-600 font-semibold"
              : "text-gray-600 hover:text-indigo-500"
          }`}
        >
          <Home size={18} />
          Home
        </Link>

        <Link
          to="/about"
          className={`flex items-center gap-1 ${
            location.pathname === "/about"
              ? "text-indigo-600 font-semibold"
              : "text-gray-600 hover:text-indigo-500"
          }`}
        >
          <Info size={18} />
          About
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 hover:text-indigo-600 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg py-3 px-5 flex flex-col gap-3 w-40 md:hidden animate-slideDown">
          <Link
            to="/"
            className={`flex items-center gap-2 ${
              location.pathname === "/"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-500"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            to="/about"
            className={`flex items-center gap-2 ${
              location.pathname === "/about"
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-500"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <Info size={18} />
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
