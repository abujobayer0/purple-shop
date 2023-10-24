import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Tags = ({ tags, setTag, active }) => {
  return (
    <Container>
      <Typography variant="h4">Tags</Typography>{" "}
      <Button
        color="secondary"
        onClick={() => setTag("")}
        variant={active === "" ? "contained" : "text"}
      >
        {" "}
        All
      </Button>
      {tags?.map((tag, indx) => (
        <Button
          key={indx}
          color="secondary"
          onClick={() => setTag(tag)}
          variant={active === tag ? "contained" : "text"}
        >
          {tag}
        </Button>
      ))}
    </Container>
  );
};

export default Tags;
