import {
  CART_ADD_ITEMS,
  CART_ADD_ITEM_FAIL,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

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
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case CART_EMPTY:
      return{...state, cartItems:[]};
    default:
      return state;
  }
};
