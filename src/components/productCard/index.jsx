import React from "react";
import { Card, styled, Typography, Box } from "@mui/material";

const StyledCard = styled(Card)(() => ({
  position: "relative",
  width: "100%",
  height: "auto",
  boxShadow: "0px 1px 13px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "all 120ms",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
  padding: "2em 0.5em",
  paddingBottom: "3.4em",

  "&:after": {
    content: `"Add to Cart"`,
    paddingTop: "1.25em",
    paddingLeft: "1.25em",
    position: "absolute",
    left: 0,
    bottom: "-60px",
    background: "rgb(248, 139, 286)",
    color: "#fff",
    height: "2.5em",
    width: "100%",
    transition: "all 80ms",
    fontWeight: 600,
    textTransform: "uppercase",
    opacity: 0,
  },

  "&:hover:after": {
    bottom: 0,
    opacity: 1,
  },

  "&:active": {
    transform: "scale(0.98)",
  },

  "&:active:after": {
    content: `"Added !"`,
    height: "3.125em",
  },
}));

const Title = styled(Typography)(() => ({
  fontFamily: " Arial, Helvetica, sans-serif",
  fontSize: "0.9em",
  position: "absolute",
  left: "0.625em",
  bottom: " 1.875em",
  fontWeight: 400,
  color: "#000",
  textAlign: "start",
}));

const Price = styled(Typography)(() => ({
  fontFamily: `Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif`,
  fontSize: "0.9em",
  position: "absolute",
  left: "0.625em",
  bottom: "0.625em",
  color: "#000",
}));

const Image = styled(Box)(() => ({
  background: "rgb(248, 139, 286)",
  display: "grid",
  placeItems: "center",
}));

const ProductCard = ({ Product }) => {
  return (
    <StyledCard>
      <Image>
        <img
          src={Product?.pictures[0]}
          alt={Product?.title}
          style={{ width: "100%", height: "auto" }}
        />
      </Image>
      <Title variant="h6">{Product?.title}</Title>
      <Price variant="h6"> £{Product?.price}</Price>
    </StyledCard>
  );
};

export default ProductCard;
