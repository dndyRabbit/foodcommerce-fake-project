import { CART_TYPES } from "../actions/cart.action";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TYPES.ADD_ITEM:
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.response.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
        toast.success(`Item qty increased.`);
      } else {
        const temp = { ...action.payload.response, cartQuantity: 1 };
        state.cart.push(temp);
        toast.success(`${action.payload.response.title} added to cart.`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      break;
    case CART_TYPES.GET_TOTALS:
      let { totalAmount, totalQty } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;

          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQty += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQty: 0,
        }
      );

      return {
        ...state,
        cartTotalAmount: totalAmount,
        cartTotalQuantity: totalQty,
      };

    // state.cartTotalAmount = totalAmount;
    // state.cartTotalQuantity = totalQty;
    // break;

    case CART_TYPES.TOGGLE_CART:
      return {
        ...state,
        cartState: action.payload.response,
      };

    case CART_TYPES.REMOVE_ITEM_FROM_CART:
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.response.id
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
      toast.success(`${action.payload.response.title} removed from cart.`);

      state.cart = removeItem;
      break;

    case CART_TYPES.INCREASE_QTY:
      const itemsIndex = state.cart.findIndex(
        (item) => item.id === action.payload.response
      );

      if (itemsIndex >= 0) {
        state.cart[itemsIndex].cartQuantity += 1;
        toast.success("Item qty increased.");
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      break;
    case CART_TYPES.DECREASE_QTY:
      const itemssIndex = state.cart.findIndex(
        (item) => item.id === action.payload.response
      );

      if (state.cart[itemssIndex].cartQuantity > 1) {
        state.cart[itemssIndex].cartQuantity -= 1;
        toast.success("Item qty decreased.");
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      break;

    case CART_TYPES.CLEAR_CART:
      toast.success("All Item on cart removed.");
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
      break;
    default:
      return state;
  }
};

export default cartReducer;
