export const addToCart = (product, quantity) => {
  return {
    type: "ADD_TO_CART",
    payload: { product, quantity },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const updateQuantity = (id, newQuantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: { id, newQuantity },
  };
};
