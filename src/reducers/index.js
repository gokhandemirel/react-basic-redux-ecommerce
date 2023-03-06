import data from "../store/data.json";

export const INITIAL_STATE = {
  products: data,
  cart: [],
  modalMessage: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.products.find((item) => item.id === action.payload.id);
      const itemCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: itemCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
        modalMessage: true,
      };
    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      break;
  }
  return state;
};
