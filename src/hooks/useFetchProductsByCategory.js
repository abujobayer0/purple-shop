import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../redux/actions/categoryAction"; // Import the action for fetching products

const useFetchProductsByCategory = (category) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.productsByCategoryReducer.products
  );
  console.log(products);
  useEffect(() => {
    dispatch(fetchProductsByCategory(category)); // Dispatch the action to fetch products
  }, [dispatch, category]);

  return products;
};

export default useFetchProductsByCategory;
