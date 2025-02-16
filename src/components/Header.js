import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Logo width={120} />

        {/* Search Bar (Hidden in Mobile) */}
        <div className="hidden md:flex items-center border rounded-full px-3 py-1 w-96">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full outline-none px-2"
          />
          <FaSearch className="text-gray-500" />
        </div>

        {/* User & Hamburger Menu */}
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-2xl cursor-pointer" />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-md absolute top-14 left-0 w-full py-2">
          <nav className="flex flex-col items-center">
            <Link to="/" className="py-2">Home</Link>
            <Link to="/categories" className="py-2">Categories</Link>
            <Link to="/cart" className="py-2">Cart</Link>
            <Link to="/login" className="py-2">Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
