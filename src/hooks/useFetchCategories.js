import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesAction } from "../redux/actions/categoriesAction";

const useFetchCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(categoriesAction());
  }, [dispatch]);

  return categories;
};

export default useFetchCategories;
