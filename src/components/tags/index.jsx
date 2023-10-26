import React from "react";
import { Container, Typography, Chip, styled } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 600,
  textTransform: "uppercase",
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  color: "white",
}));

const TagsChip = styled(Chip)(({ theme }) => ({
  padding: 1,
  marginRight: 10,
  marginBottom: 10,
  fontStyle: "italic",
  color: "#444",
}));

const Tag = ({ label, onClick, isActive }) => (
  <TagsChip
    label={label}
    size="small"
    onClick={onClick}
    sx={{
      background: isActive && "linear-gradient(to bottom, #8E24AA, #673AB7)",
      color: isActive && "white",
    }}
    variant={isActive ? "contained" : "outlined"}
    icon={<LocalOfferIcon fontSize="small" color="white" />}
  />
);

const Tags = ({ tags, setTag, active }) => {
  return (
    <Container>
      <Title variant="h4">Tags</Title>
      <Tag label="All" onClick={() => setTag("")} isActive={active === ""} />
      {tags?.map((tag, indx) => (
        <Tag
          key={indx}
          label={tag}
          onClick={() => setTag(tag)}
          isActive={active === tag}
        />
      ))}
    </Container>
  );
};

export default Tags;
