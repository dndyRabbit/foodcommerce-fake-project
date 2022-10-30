import React from "react";
import logo from "../assets/logo-food.png";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import { setToggleCart } from "../redux/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const pathname = useLocation();

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const isActive = (pn) => {
    if (pn === pathname.pathname) return "border-b-2 border-orange-500";
  };

  return (
    <>
      <header className="absolute top-7 left-0 right-0 w-auto z-[200] opacity-100 ">
        <nav className="flex justify-between items-center food-container blur-effect-theme px-4 py-2 rounded-full">
          <Link to={"/"}>
            <div className="flex items-center">
              <img
                src={logo}
                alt="logopng"
                className="w-auto h-[7vh] object-contain"
              />
            </div>
          </Link>

          <ul className="flex items-center justify-center gap-3 md:hidden">
            <Link to="/">
              <li
                className={`flex items-center cursor-pointer hover:scale-105 hover:text-orange-500 text-slate-900 text-sm lg:text-xs transition-all duration-300 ${isActive(
                  "/"
                )}`}
              >
                Home
              </li>
            </Link>

            <Link to="/menu">
              <li
                className={`flex items-center cursor-pointer hover:scale-105 hover:text-orange-500 text-slate-900 text-sm lg:text-xs transition-all duration-300 ${isActive(
                  "/menu"
                )}`}
              >
                Menu
              </li>
            </Link>
            <li className="flex items-center cursor-pointer hover:scale-105 hover:text-orange-500 text-slate-900 text-sm lg:text-xs transition-all duration-300">
              Blog
            </li>
            <li className="flex items-center cursor-pointer hover:scale-105 hover:text-orange-500 text-slate-900 text-sm lg:text-xs transition-all duration-300">
              Contact Us
            </li>
          </ul>

          <div className="flex items-center gap-3 transition-all">
            <div className="p-2 lg:p-1 bg-red-500 items-center  rounded-full cursor-pointer ">
              {/* Icon */}
              <HeartIcon className="h-5 w-5  text-red-100" />
            </div>
            <button
              className="p-2 lg:p-1 bg-orange-500 items-center  rounded-full cursor-pointer transition-all duration-300 hover:bg-orange-800 active:bg-orange-300"
              onClick={() => dispatch(setToggleCart({ cartState: true }))}
            >
              {/* Icon */}

              <ShoppingCartIcon className="h-5 w-5  text-orange-100" />
              <div
                className={`absolute top-3 right-3  w-5 h-5 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center  bg-slate-600 text-slate-100 shadow shadow-slate-100`}
              >
                {cart?.cartTotalQuantity}
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
