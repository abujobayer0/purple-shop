import React, { useState } from "react";
import useFetchCategories from "../hooks/useFetchCategories";
import useFetchTags from "../hooks/useFetchTags";
import useFetchCollection from "../hooks/useFetchCollection";
import useFetchProducts from "../hooks/useFetchProducts";
import { Categories, Products, Collections, Tags } from "../components";

const Home = () => {
  const [tag, setTag] = useState("");
  let queryUrl;

  if (tag !== "") {
    queryUrl = `/items?tag=${encodeURIComponent(tag)}`;
  }

  const url = queryUrl || "/items";
  const { products, loading } = useFetchProducts(url);
  const categories = useFetchCategories();
  const tags = useFetchTags();
  const collections = useFetchCollection();

  return (
    <React.Fragment>
      <Categories categories={categories} />
      <Collections collections={collections} />
      <Tags active={tag} setTag={setTag} tags={tags} />
      <Products Products={products} loading={loading} />
    </React.Fragment>
  );
};

export default Home;
