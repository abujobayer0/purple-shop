import axiosInstance from "../../services/axiosInstance";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsByCategory = (category) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`items?category=${category}`);
    const products = response.data; // Assuming the API response contains a list of products
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, error });
  }
};
