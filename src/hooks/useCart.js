import { useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../redux/actions/cartAction";

export const useAddToCart = () => {
  const dispatch = useDispatch();
  return (product, quantity) => {
    dispatch(addToCart(product, quantity));
  };
};

export const useRemoveFromCart = () => {
  const dispatch = useDispatch();
  return (productId) => {
    dispatch(removeFromCart(productId));
  };
};

export const useUpdateCartItemQuantity = () => {
  const dispatch = useDispatch();
  return (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };
};

export const useClearCart = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch(clearCart());
  };
};
