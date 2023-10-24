import { combineReducers } from "redux";
import productsByCategoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  productsByCategoryReducer: productsByCategoryReducer,
  // Add other reducers here
});

export default rootReducer;
