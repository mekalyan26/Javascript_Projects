import { CART_ADD_ITEMS } from "../constants/cartConstants";

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEMS:
      const item = action.payload;
      const ifItemExist = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (ifItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === ifItemExist.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [state.cartItems, item] };
      }

    default:
      return state;
  }
};
