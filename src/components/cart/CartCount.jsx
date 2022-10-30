import {
  ArrowPathIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const CartCount = ({ setToggleCart, cart, dispatch }) => {
  return (
    <>
      <div className="w-full h-11 flex items-center justify-between px-4 sticky top-0 left-0 right-0 ">
        <div className="flex items-center gap-3">
          <div
            className="grid items-center cursor-pointer"
            onClick={() => dispatch(setToggleCart({ cartState: false }))}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-100 hover:text-orange-900 stroke-[2]" />
          </div>
          <div className="flex justify-center items-center space-x-2">
            <h1 className="text base font-medium text-slate-100 ">Your Cart</h1>
            <span className="bg-theme-cart  rounded px-1 py-0.5 text-slate-100 font-normal text-xs">
              ({cart.cartTotalQuantity} Items)
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-theme-cart rounded active:scale-90 p-0.5">
            <ArrowPathIcon className="w-5 h-5 text-white stroke-[2]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
