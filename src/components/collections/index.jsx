import React from "react";
import { Container, Button, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Title = styled(Typography)(() => ({
  marginBottom: 3,
  color: "#333",
  fontWeight: 600,
}));

const CollectionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
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

const Collections = ({ collections }) => {
  return (
    <Container>
      <Title variant="h4">Collections</Title>

      {collections?.map((collection, indx) => (
        <Link key={indx} to={`/collection/${collection}`}>
          <CollectionButton variant="contained">{collection}</CollectionButton>
        </Link>
      ))}
    </Container>
  );
};

export default Collections;
