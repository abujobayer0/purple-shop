import React from "react";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import { BackButton, Products } from "../components";
import { Container } from "@mui/material";
import Loader from "../components/products/loader";

const CollectionProducts = () => {
  const { collectionId } = useParams();
  const { products, loading } = useFetchProducts("/items");

  const showProducts = products.filter((product) =>
    product.collections.includes(collectionId)
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

export default CollectionProducts;
