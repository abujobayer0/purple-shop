import {
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
} from "../actions/collectionAction";

const initialState = {
  collection: [],
  error: null,
};

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collection: action.payload,
        error: null,
      };

    case FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        collection: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default collectionReducer;
