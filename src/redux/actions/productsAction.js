import axiosInstance from "../../services/axiosInstance";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";

export const fetchProducts = (url) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await axiosInstance.get(url);
    const products = response.data;
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, error });
  }
};
