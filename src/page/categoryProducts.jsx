import React from "react";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import { Products, BackButton } from "../components";
import { Container } from "@mui/material";
import Loader from "../components/products/loader";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const { products, loading } = useFetchProducts(`/items`);

  const showProducts = products.filter((product) =>
    product.categories.includes(categoryId)
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <BackButton />
      <Products Products={showProducts} />
    </Container>
  );
};

export default CategoryProducts;
