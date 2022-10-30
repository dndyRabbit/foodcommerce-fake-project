import React from "react";

const CartTotal = ({ cart }) => {
  return (
    <>
      <div className="fixed bottom-0 bg-orange-500 w-full py-4 grid items-center border-slate-900 border-t-[0.5px]">
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-base font-semibold uppercase">SubTotal</h1>
          <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
            ${cart.cartTotalAmount}
          </h1>
        </div>
        <div className="grid items-center gap-3">
          <p className="text-sm font-medium text-center">
            Taxes and Shipping will be calculated at shipping
          </p>
          <button
            type="button"
            className="bg-theme-cart w-full text-white active:scale-90 active:rounded-lg transition-all duration-300"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
