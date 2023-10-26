import React from "react";
import { Grid, styled } from "@mui/material";
import ProductCard from "../productCard";
import { Loader } from "../index";

const ProductsGrid = styled(Grid)(() => ({
  marginTop: 8,
  display: "flex",
  marginBottom: 24,
  justifyContent: "start",
}));

const Products = ({ Products, loading }) => {
  if (loading) {
    return <Loader />;
  } else {
    return (
      <ProductsGrid container spacing={4}>
        {Products?.map((Product, index) => (
          <Grid item key={index} xs={6} md={6} lg={6}>
            <ProductCard Product={Product} />
          </Grid>
        ))}
      </ProductsGrid>
    );
  }
};

export default Products;
