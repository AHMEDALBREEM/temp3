import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-green-600 text-white p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/paradise-nursery"
          className="text-2xl font-bold hover:text-green-200 transition"
        >
          Paradise Nursery
        </Link>
        {/* Navigation Links */}
        <div className="flex gap-6 text-lg">
          <Link
            to="/paradise-nursery"
            className={`hover:text-green-200 transition ${location.pathname === '/paradise-nursery' ? 'text-green-200' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/paradise-nursery/products"
            className={`hover:text-green-200 transition ${location.pathname === '/paradise-nursery/products' ? 'text-green-200' : ''}`}
          >
            Products
          </Link>
          <Link
            to="/paradise-nursery/cart"
            className={`hover:text-green-200 transition flex items-center gap-1 ${location.pathname === '/paradise-nursery/cart' ? 'text-green-200' : ''}`}
          >
            <span>Cart</span>
            <span
              className="bg-white text-green-600 px-2 py-1 rounded-full text-sm font-bold"
              aria-label={`Cart contains ${itemCount} items`}
            >
              {itemCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
