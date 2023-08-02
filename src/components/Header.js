import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../utils/constants";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

function Header() {
  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center border-b-2">
      <div className="w-56">
        <img src={Logo} alt="logo" className="h-40" />
      </div>
      <div>
        <ul className="flex mx-4 gap-4">
          <li>Online Status: {isOnline ? "✅" : "🛑"}</li>
          <li className="pb-3 transition ease-in-out delay-100 hover:text-red-600 hover:border-b-2 hover:border-red-400 hover:pb-0">
            <Link to="/">Home</Link>
          </li>
          <li className="pb-3 transition ease-in-out delay-100 hover:text-red-600 hover:border-b-2 hover:border-red-400 hover:pb-0">
            <Link to="/about">About</Link>
          </li>
          <li className="pb-3 transition ease-in-out delay-100 hover:text-red-600 hover:border-b-2 hover:border-red-400 hover:pb-0">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="pb-3 transition ease-in-out delay-100 hover:text-red-600 hover:border-b-2 hover:border-red-400 hover:pb-0">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="pb-3 relative transition ease-in-out delay-100 hover:text-red-600 hover:border-b-2 hover:border-red-400 hover:pb-0">
            <Link to="/cart">
              Cart
              <span
                data-testid="CartLength"
                className="absolute bottom-8 -right-3 bg-[#4681f4] text-white text-xs px-2 rounded-full"
              >
                {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
