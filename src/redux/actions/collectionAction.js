import axiosInstance from "../../services/axiosInstance";

export const FETCH_COLLECTION_SUCCESS = "FETCH_COLLECTION_SUCCESS";
export const FETCH_COLLECTION_FAILURE = "FETCH_COLLECTION_FAILURE";

export const fetchCollectionAction = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/collections");
    const collection = response.data;
    dispatch({ type: FETCH_COLLECTION_SUCCESS, payload: collection });
  } catch (error) {
    dispatch({ type: FETCH_COLLECTION_FAILURE, error });
  }
};
