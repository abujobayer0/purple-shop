import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../actions/categoryAction";

const initialState = {
  products: [], // Store the products
  loading: false,
  error: null,
};

const productsByCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload, // Store the fetched products
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error, // Use "error" instead of "payload" for errors
      };
    default:
      return state;
  }
};

export default productsByCategoryReducer;
