import React from "react";
import { Typography, Chip, styled, Box, IconButton } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MenuIcon from "@mui/icons-material/Menu";

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  textTransform: "uppercase",
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const TagsChip = styled(Chip)(({ theme }) => ({
  padding: 1,
  color: "#444",
  marginRight: 10,
  marginBottom: 10,
  fontStyle: "italic",
}));

const TagWrapper = styled(Box)(({ theme }) => ({
  zIndex: 99,
  width: "100%",
  top: "55.5px",
  position: "sticky",
  background: "white",
  borderBottom: "1px solid #f0f0f0",
  [theme.breakpoints.up("md")]: { top: "64.5px" },
}));

const TextWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: { marginTop: 0 },
  marginTop: -70,
}));

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  margin: 10,
  display: "flex",
  cursor: "pointer",
  [theme.breakpoints.up("md")]: { display: "none" },
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

const Tags = ({ tags, setTag, active, openDrawer }) => {
  return (
    <TagWrapper>
      <TextWrapper>
        <Title variant="h6" pt={4}>
          Tags
        </Title>
        <MenuIconButton onClick={openDrawer}>
          <MenuIcon sx={{ fontSize: 34 }} />
        </MenuIconButton>
      </TextWrapper>
      <Tag label="All" onClick={() => setTag("")} isActive={active === ""} />
      {tags?.map((tag, indx) => (
        <Tag
          key={indx}
          label={tag}
          onClick={() => setTag(tag)}
          isActive={active === tag}
        />
      ))}
    </TagWrapper>
  );
};

export default Tags;
