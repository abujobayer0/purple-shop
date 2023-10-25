import React from "react";
import { Container, Typography, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Title = styled(Typography)(() => ({
  marginBottom: 3,
  color: "#333",
  fontWeight: 600,
}));

const CategoryButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
  width: 300,
  margin: "10px",
  borderRadius: "40px",
  fontSize: "1.2rem",
  textTransform: "none",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
    transform: "scale(1.05)",
  },
}));

const Categories = ({ categories }) => {
  return (
    <Container>
      <Title variant="h4">Categories</Title>

      {categories?.map((category, indx) => (
        <Link key={indx} to={`/category/${category}`}>
          <CategoryButton color="secondary">{category}</CategoryButton>
        </Link>
      ))}
    </Container>
  );
};

export default Categories;
