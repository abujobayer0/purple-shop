import { FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE } from "../actions/tagsAction";

const initialState = {
  tags: [],
  error: null,
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        error: null,
      };
    case FETCH_TAGS_FAILURE:
      return {
        ...state,
        tags: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default tagsReducer;
