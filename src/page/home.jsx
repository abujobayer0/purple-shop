import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import { Products } from "../components";
import { Container } from "@mui/material";

const Home = () => {
  const url = "/items";
  const { products, loading } = useFetchProducts(url);

  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Products Products={products} loading={loading} />
    </Container>
  );
};

export default Home;
