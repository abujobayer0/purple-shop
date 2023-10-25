const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingCartItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { product, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { product, quantity }],
        };
      }

    case "REMOVE_FROM_CART":
      const productId = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== productId),
      };
    case "UPDATE_QUANTITY":
      const { id, newQuantity } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === id
            ? { product: item.product, quantity: newQuantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
