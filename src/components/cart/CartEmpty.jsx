import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";

const CartEmpty = () => {
  return (
    <>
      <div>
        <img src="" alt="" />

        <button type="button" className="button-theme">
          <ArrowLeftIcon />
          <span>Back to Menus</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
