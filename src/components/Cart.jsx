import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGetTotals, setToggleCart } from "../redux/actions/cart.action";
import CartCount from "./cart/CartCount";
import CartItem from "./cart/CartItem";
import CartTotal from "./cart/CartTotal";
import CartEmpty from "./cart/CartEmpty";

const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setGetTotals());
    console.log(cart);
  }, [cart.cart, dispatch]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme bg-orange-500/50 z-[300] h-screen w-full ${
          cart?.cartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div className="blur-effect-theme bg-orange-500/50 shadow-orange-400 absolute right-0 max-w-xl w-full">
          <CartCount
            setToggleCart={setToggleCart}
            cart={cart}
            dispatch={dispatch}
          />

          {cart.cart.length === 0 ? (
            <CartEmpty setToggleCart={setToggleCart} />
          ) : (
            <div>
              <div className="flex items-center justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[95vh] scroll-smooth scroll-hidden py-2 pb-[8rem]">
                {cart.cart.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <CartTotal cart={cart} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
