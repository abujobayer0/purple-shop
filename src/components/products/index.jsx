import React from "react";
import { Grid, styled, Box } from "@mui/material";
import ProductCard from "../productCard";
import { ProductCardSkeleton } from "../index";
import Lottie from "lottie-react";
import NotFound from "../../assets/notfound.json";
const ProductsGrid = styled(Grid)(() => ({
  marginTop: 8,
  display: "flex",
  marginBottom: 90,
  justifyContent: "start",
}));

const NoDataContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  height: "50vh",
  alignItems: "center",
  flexDirection: "column",
}));

const Products = ({ Products, loading }) => {
  if (loading) {
    return <ProductCardSkeleton />;
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
            <Box sx={{ maxWidth: 250 }}>
              <Lottie animationData={NotFound} loop={true} />
            </Box>
          </NoDataContainer>
        )}
      </React.Fragment>
    );
  }
};

export default Products;
