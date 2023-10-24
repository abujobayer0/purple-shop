import React from "react";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import { BackButton, Products } from "../components";
import { Container } from "@mui/material";

const CollectionProducts = () => {
  const { collectionId } = useParams();
  const collectionParam = encodeURIComponent(collectionId);
  const products = useFetchProducts(`/items?collection=${collectionParam}`);
  return (
    <Container>
      <BackButton />
      <Products Products={products} />
    </Container>
  );
};

export default CollectionProducts;
