import React from "react";
import { Grid, styled, Box, Typography } from "@mui/material";
import ProductCard from "../productCard";
import { Loader } from "../index";

const ProductsGrid = styled(Grid)(() => ({
  marginTop: 8,
  display: "flex",
  marginBottom: 90,
  justifyContent: "start",
}));

const NoDataImage = styled("img")(() => ({
  width: "80px",
  height: "auto",
  margin: "0 auto",
  display: "block",
}));

const NoDataContainer = styled(Box)(() => ({
  width: "100%",
  height: "50vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const NoDataTitle = styled(Typography)(() => ({
  fontSize: 16,
  marginLeft: 5,
  fontWeight: 600,
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const Products = ({ Products, loading }) => {
  if (loading) {
    return <Loader />;
  } else {
    return (
      <React.Fragment>
        <ProductsGrid container spacing={4}>
          {Products?.map((Product, index) => (
            <Grid item key={index} xs={6} md={12} lg={6}>
              <ProductCard Product={Product} />
            </Grid>
          ))}
        </ProductsGrid>

        {Products?.length < 1 && (
          <NoDataContainer>
            <NoDataImage
              src="https://cdn-icons-png.flaticon.com/512/10303/10303644.png"
              alt="no data icon"
            />
            <NoDataTitle>NO ITEMS</NoDataTitle>
          </NoDataContainer>
        )}
      </React.Fragment>
    );
  }
};

export default Products;
