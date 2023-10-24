import React, { useState } from "react";
import useFetchCategories from "../hooks/useFetchCategories";
import useFetchTags from "../hooks/useFetchTags";
import useFetchCollection from "../hooks/useFetchCollection";
import useFetchProducts from "../hooks/useFetchProducts";
import { Categories, Collections, NavBar, Tags } from "../components";
import Products from "../components/products";

// function getSearchParams(category, tag, collection) {
//   const params = {};

//   if (category) params.category = category;
//   if (tag) params.tag = tag;
//   if (collection) params.collection = collection;

//   const searchParams = new URLSearchParams(params);
//   return searchParams.toString();
// }

const Home = () => {
  const [collection, setCollection] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  let queryUrl;
  if (tag) {
    queryUrl = `/items?tag=${encodeURIComponent(tag)}`;
  }
  // if (category && tag) {
  //   queryUrl = `/items?category=${encodeURIComponent(
  //     category
  //   )}&tag=${encodeURIComponent(tag)}`;
  // } else if (category && collection) {
  //   queryUrl = `/items?category=${encodeURIComponent(
  //     category
  //   )}&collection=${encodeURIComponent(collection)}`;
  // } else if (tag && collection) {
  //   queryUrl = `/items?tag=${encodeURIComponent(
  //     tag
  //   )}&collection=${encodeURIComponent(collection)}`;
  // } else if (category) {
  //   queryUrl = `/items?category=${encodeURIComponent(category)}`;
  // } else if (tag) {
  //   queryUrl = `/items?tag=${encodeURIComponent(tag)}`;
  // } else if (collection) {
  //   queryUrl = `/items?collection=${encodeURIComponent(collection)}`;
  // }
  // const searchParams = getSearchParams(category, tag, collection);
  // const queryUrl = searchParams ? `/items?${searchParams}` : "/items";

  // const url = queryUrl || "/items";
  const products = useFetchProducts(queryUrl);
  const categories = useFetchCategories();
  const tags = useFetchTags();
  const collections = useFetchCollection();

  return (
    <>
      <NavBar />
      <Categories
        active={category}
        setCategory={setCategory}
        categories={categories}
      />
      <Collections
        active={collection}
        setCollection={setCollection}
        collections={collections}
      />
      <Tags active={tag} setTag={setTag} tags={tags} />
      <Products Products={products} />
    </>
  );
};

export default Home;
