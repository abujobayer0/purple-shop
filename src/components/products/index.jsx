import React from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "../productCard";
import Loader from "./loader";

const Products = ({ Products, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
      }}
    >
      <Grid container display={"flex"} justifyContent={"center"} spacing={4}>
        {Products?.map((Product, index) => (
          <Grid item key={index} xs={6} sm={5} lg={4}>
            <ProductCard Product={Product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
