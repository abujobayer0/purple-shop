import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import tagsReducer from "./tagsReducer";
import collectionReducer from "./collectionReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import discountReducer from "./discountReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  tags: tagsReducer,
  collection: collectionReducer,
  cart: cartReducer,
  discount: discountReducer,
});

export default rootReducer;
