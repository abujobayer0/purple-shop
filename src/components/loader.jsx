import React from "react";
import { Card, Grid, styled, Skeleton, Container } from "@mui/material";

const ProductCardContainer = styled(Card)(({ theme }) => ({
  padding: 10,
  width: "100%",
  height: 400,
  [theme.breakpoints.up("md")]: {
    height: 500,
  },
  display: "flex",
  textAlign: "start",
  alignItems: "start",
  marginLeft: "-10px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: { width: 380 },
}));

const ProductCardSkeleton = () => {
  return (
    <Container sx={{ minHeight: "100vh", my: 4, display: "flex" }}>
      <Grid container spacing={{ xs: 4, md: 12 }}>
        <Grid item xs={6} md={12} lg={6}>
          <ProductCardContainer>
            <Skeleton variant="rectangular" width="100%" height={220} />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" height={70} width="80%" />
          </ProductCardContainer>
        </Grid>
        <Grid item xs={6} md={12} lg={6}>
          <ProductCardContainer>
            <Skeleton variant="rectangular" width="100%" height={220} />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" height={70} width="80%" />
          </ProductCardContainer>
        </Grid>
        <Grid item xs={6} md={12} lg={6}>
          <ProductCardContainer>
            <Skeleton variant="rectangular" width="100%" height={220} />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" height={70} width="80%" />
          </ProductCardContainer>
        </Grid>
        <Grid item xs={6} md={12} lg={6}>
          <ProductCardContainer>
            <Skeleton variant="rectangular" width="100%" height={220} />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" height={70} width="80%" />
          </ProductCardContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductCardSkeleton;
