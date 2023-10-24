import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionAction } from "../redux/actions/collectionAction";

const useFetchCollection = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.collection);
  useEffect(() => {
    dispatch(fetchCollectionAction());
  }, [dispatch]);

  return collection;
};

export default useFetchCollection;
