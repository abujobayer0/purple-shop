import React from "react";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import { Products, BackButton } from "../components";
import { Container } from "@mui/material";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const categoryParam = encodeURIComponent(categoryId);
  const products = useFetchProducts(`/items?category=${categoryParam}`);

  return (
    <Container>
      <BackButton />
      <Products Products={products} />
    </Container>
  );
};

export default CategoryProducts;
