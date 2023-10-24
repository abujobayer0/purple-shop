import React from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "../productCard";

const Products = ({ Products }) => {
  return (
    <Container sx={{ padding: { xs: "50px 25px", md: "50px 0" } }}>
      <Grid container spacing={4}>
        {Products?.map((Product, index) => (
          <Grid item key={index} xs={6} sm={4} md={4}>
            <ProductCard Product={Product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
