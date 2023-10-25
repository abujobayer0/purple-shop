import React from "react";
import { Container, Typography, Chip, styled } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 600,
  textTransform: "uppercase",
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  color: "white",
}));

const Tags = ({ tags, setTag, active }) => {
  return (
    <Container>
      <Title variant="h4">Tags</Title>{" "}
      <Chip
        color="secondary"
        label="All"
        onClick={() => setTag("")}
        variant={active === "" ? "contained" : "outlined"}
        style={{
          marginRight: "16px",
          marginBottom: "16px",
          borderRadius: "20px",
          border: `2px solid lightgray`,
        }}
      />
      {tags?.map((tag, indx) => (
        <Chip
          key={indx}
          color="secondary"
          label={tag}
          onClick={() => setTag(tag)}
          variant={active === tag ? "contained" : "outlined"}
          style={{
            marginRight: "16px",
            marginBottom: "16px",
            borderRadius: "20px",
            border: `2px solid lightgray`,
          }}
        />
      ))}
    </Container>
  );
};

export default Tags;
