import React from "react";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import { Products, ProductCardSkeleton } from "../components";
import { Container } from "@mui/material";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const { products, loading } = useFetchProducts(`/items`);

  const showProducts = products.filter((product) =>
    product.categories.includes(categoryId)
  );

  if (loading) {
    return (
      <Container>
        <ProductCardSkeleton />
      </Container>
    );
  } else {
    return (
      <Container sx={{ minHeight: "100vh" }}>
        <Products Products={showProducts} />
      </Container>
    );
  }
};

export default CategoryProducts;
