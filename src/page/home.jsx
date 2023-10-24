import React from "react";
import useFetchProductsByCategory from "../hooks/useFetchProductsByCategory";

const Home = () => {
  const productsByCategory = useFetchProductsByCategory("jackets");
  return <div></div>;
};

export default Home;
