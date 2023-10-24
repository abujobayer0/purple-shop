import React from "react";
import { Container, Button, Typography } from "@mui/material";

const Collections = ({ collections, setCollection, active }) => {
  return (
    <Container>
      <Typography variant="h4">Collections</Typography>{" "}
      <Button
        color="secondary"
        onClick={() => setCollection("")}
        variant={active === "" ? "contained" : "text"}
      >
        All
      </Button>
      {collections?.map((collection, indx) => (
        <Button
          key={indx}
          color="secondary"
          onClick={() => setCollection(collection)}
          variant={active === collection ? "contained" : "text"}
        >
          {collection}
        </Button>
      ))}
    </Container>
  );
};

export default Collections;
