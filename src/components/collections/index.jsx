import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, styled, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  textTransform: "uppercase",
}));

const IntroBox = styled(Box)(({ theme }) => ({
  color: "white",
  borderRadius: 5,
  marginBottom: 10,
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const CollectionWrapper = styled(Box)(({ theme }) => ({
  height: 40,
  width: "100%",
  borderRadius: 5,
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  transition: "background 0.3s",
  border: "1px solid lightgray",
  justifyContent: "space-between",
  "&:hover": { background: "#f0f0f0", borderColor: "lightgray" },
}));

const Collection = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: "white",
  fontWeight: 600,
  padding: "0 25px",
  textTransform: "uppercase",
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  gap: 10,
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: "1fr ",
}));

const Arrow = styled(ArrowForwardIosIcon)(() => ({
  fontSize: 14,
  paddingRight: 16,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: 16,
  paddingRight: 40,
  [theme.breakpoints.up("md")]: { paddingRight: 18 },
}));

const Collections = ({ collections, setTag, closeDrawer }) => {
  const navigate = useNavigate();

  const handleNavigate = (collection) => {
    navigate(`/collection/${collection}`);
    setTag("");
    closeDrawer();
  };

  return (
    <StyledContainer>
      <IntroBox>
        <Title variant="h6">Collections</Title>
      </IntroBox>
      <StyledBox>
        {collections?.map((collection, indx) => (
          <CollectionWrapper
            key={indx}
            onClick={() => handleNavigate(collection)}
          >
            <Collection variant="h6">{collection}</Collection>
            <Arrow />
          </CollectionWrapper>
        ))}
      </StyledBox>
    </StyledContainer>
  );
};

export default Collections;
