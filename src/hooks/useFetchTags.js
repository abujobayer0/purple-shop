import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagsAction } from "../redux/actions/tagsAction";

const useFetchTags = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags.tags);
  useEffect(() => {
    dispatch(tagsAction());
  }, [dispatch]);

  return tags;
};

export default useFetchTags;
