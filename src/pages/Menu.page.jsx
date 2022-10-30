import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "../components/Navbar";
import { menus } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { setAddItemToCart } from "../redux/actions/cart.action";
import Cart from "../components/Cart";

const Menus = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const onAddToCart = (item) => {
    dispatch(setAddItemToCart(item));
    console.log(cart.cartState);
  };

  return (
    <>
      <Cart />
      <Navbar />
      <div className=" flex flex-col h-auto w-auto bg-[#fbf6da] pt-32">
        <div className="food-container-x">
          <div className="flex flex-col items-center justify-center mx-auto gap-3">
            <h1 className="text-4xl font-bold">{menus.title}</h1>
            <h1 className="text-4xl font-light text-orange-500">FAST FOOD</h1>
            <p className="text-orange-700">~~~</p>
          </div>
          <div className="grid items-center justify-items-center grid-cols-5 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
            {menus?.items?.map((val, i) => (
              <div
                key={i}
                className={`relative bg-gradient-to-b ${val.color}  grid items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 blur-effect-theme h-auto`}
              >
                <div className={`grid items-center justify-items-center`}>
                  <div className={`flex items-center  justify-center`}>
                    <img
                      src={val.img}
                      alt={`img/item-img/${i}`}
                      className={`transitions-theme hover:-rotate-12 h-36 w-auto object-contain`}
                    />
                  </div>
                  <h1 className="text-slate-900 text-md  font-medium filter drop-shadow">
                    {val.title}
                  </h1>
                  <p className="text-slate-900 filter drop-shadow text-xs font-normal">
                    {val.text}
                  </p>

                  <div className="flex items-center justify-between w-28 my-2">
                    <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
                      <h1 className="text-black text-sm font-medium ">
                        ${val.price}
                      </h1>
                    </div>
                    <div className="flex items-center gap-1 ">
                      <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
                      <h1 className="md:text-sm font-normal text-slate-100">
                        {val.rating}
                      </h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onAddToCart(val)}
                      className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
                    >
                      <ShoppingBagIcon className="icon-style text-slate-900" />
                    </button>
                    <button
                      type="button"
                      // onClick={() => {
                      //   onCartToggle();
                      //   onAddToCart();
                      // }}
                      className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200"
                    >
                      {val.btn}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
