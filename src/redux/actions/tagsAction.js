import axiosInstance from "../../services/axiosInstance";

export const FETCH_TAGS_SUCCESS = "FETCH_TAGS_SUCCESS";
export const FETCH_TAGS_FAILURE = "FETCH_TAGS_FAILURE";

export const tagsAction = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/tags");
    const tags = response.data;
    dispatch({ type: FETCH_TAGS_SUCCESS, payload: tags });
  } catch (error) {
    dispatch({ type: FETCH_TAGS_FAILURE, error });
  }
};
