import { CART_ADD_ITEMS, CART_REMOVE_ITEM } from "../constants/cartConstants";

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

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartitems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };

    default:
      return state;
  }
};
