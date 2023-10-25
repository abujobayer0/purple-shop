import React from "react";
import { Container, Typography, styled, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 600,
  textTransform: "uppercase",
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  color: "white",
}));

const Categories = ({ categories }) => {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Title variant="h4">Categories</Title>

      {categories?.map((category, indx) => (
        <Link key={indx} to={`/category/${category}`}>
          <Chip
            label={category}
            variant="outlined"
            style={{
              marginRight: "16px",
              marginBottom: "16px",
              borderRadius: "20px",
              border: `2px solid lightgray`,
            }}
          />
        </Link>
      ))}
    </Container>
  );
};

export default Categories;
