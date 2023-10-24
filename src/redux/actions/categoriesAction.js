import axiosInstance from "../../services/axiosInstance";

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export const categoriesAction = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/categories");
    const categories = response.data;
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAILURE, error });
  }
};
