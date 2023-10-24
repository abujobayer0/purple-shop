import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Categories = ({ categories, setCategory, active }) => {
  return (
    <Container>
      <Typography variant="h4">Categories</Typography>
      <Button
        color="secondary"
        onClick={() => setCategory("")}
        variant={active === "" ? "contained" : "text"}
      >
        All
      </Button>
      {categories?.map((category, indx) => (
        <Button
          key={indx}
          color="secondary"
          onClick={() => setCategory(category)}
          variant={active === category ? "contained" : "text"}
        >
          {category}
        </Button>
      ))}
    </Container>
  );
};

export default Categories;
