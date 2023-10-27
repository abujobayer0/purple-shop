import React from "react";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import { ProductCardSkeleton, Products } from "../components";
import { Container } from "@mui/material";

const CollectionProducts = () => {
  const { collectionId } = useParams();
  const { products, loading } = useFetchProducts("/items");

  const showProducts = products.filter((product) =>
    product.collections.includes(collectionId)
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

export default CollectionProducts;
