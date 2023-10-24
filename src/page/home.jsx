import React from "react";
import useFetchCategories from "../hooks/useFetchCategories";
import useFetchTags from "../hooks/useFetchTags";
import useFetchCollection from "../hooks/useFetchCollection";
import useFetchProducts from "../hooks/useFetchProducts";
import { Categories, Collections, NavBar, Tags } from "../components";

const Home = () => {
  const products = useFetchProducts("/items");
  const categories = useFetchCategories();
  const tags = useFetchTags();
  const collection = useFetchCollection();

  return (
    <>
      <NavBar />
      <Categories />
      <Collections />
      <Tags />
    </>
  );
};

export default Home;
