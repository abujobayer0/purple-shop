import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import tagsReducer from "./tagsReducer";
import collectionReducer from "./collectionReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  tags: tagsReducer,
  collection: collectionReducer,
});

export default rootReducer;
