export const CART_TYPES = {
  LOADING: "LOADING",
  ADD_ITEM: "ADD_ITEM",
  GET_TOTALS: "GET_TOTALS",
  TOGGLE_CART: "TOGGLE_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  INCREASE_QTY: "INCREASE_QTY",
  DECREASE_QTY: "DECREASE_QTY",
  CLEAR_CART: "CLEAR_CART",
};

export const setAddItemToCart = (item) => async (dispatch) => {
  try {
    dispatch({
      type: CART_TYPES.ADD_ITEM,
      payload: { response: item },
    });
    console.log("DATA GET FROM BACKEND");
  } catch (err) {
    console.log(err);
  }
};

export const setGetTotals = () => async (dispatch) => {
  try {
    dispatch({
      type: CART_TYPES.GET_TOTALS,
      payload: { response: null },
    });
  } catch (err) {
    console.log(err);
  }
};

export const setToggleCart =
  ({ cartState }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CART_TYPES.TOGGLE_CART,
        payload: { response: cartState },
      });
    } catch (err) {
      console.log(err);
    }
  };

export const setRemoveItemcart = (item) => async (dispatch) => {
  try {
    dispatch({
      type: CART_TYPES.REMOVE_ITEM_FROM_CART,
      payload: { response: item },
    });
  } catch (err) {
    console.log(err);
  }
};

export const setIncreaseQty = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CART_TYPES.INCREASE_QTY,
      payload: { response: id },
    });
  } catch (err) {
    console.log(err);
  }
};
export const setDecreaseQty = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CART_TYPES.DECREASE_QTY,
      payload: { response: id },
    });
  } catch (err) {
    console.log(err);
  }
};
export const setClearCart = () => async (dispatch) => {
  try {
    dispatch({
      type: CART_TYPES.CLEAR_CART,
      payload: { response: null },
    });
  } catch (err) {
    console.log(err);
  }
};
