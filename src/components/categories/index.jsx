import React from "react";
import { Container, Typography, styled, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  textTransform: "uppercase",
}));

const IntroBox = styled(Box)(({ theme }) => ({
  color: "white",
  borderRadius: 5,
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const CategoryWrapper = styled(Box)(({ theme }) => ({
  height: 40,
  width: "100%",
  display: "flex",
  borderRadius: 5,
  alignItems: "center",
  border: "1px solid lightgray",
  transition: "background 0.3s",
  justifyContent: "space-between",
  "&:hover": {
    background: "#f0f0f0",
    borderColor: "lightgray",
  },
}));

const Category = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: "white",
  fontWeight: 600,
  cursor: "pointer",
  padding: "0 25px",
  textTransform: "uppercase",
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const StyledBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr ",
  gap: 8,
  justifyContent: "center",
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

const Categories = ({ categories, closeDrawer }) => {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/category/${category}`);
    closeDrawer();
  };

  return (
    <StyledContainer>
      <IntroBox>
        <Title variant="h6">Categories</Title>
      </IntroBox>
      <StyledBox>
        {categories?.map((category, indx) => (
          <CategoryWrapper key={indx} onClick={() => handleNavigate(category)}>
            <Category variant="h6">{category}</Category>
            <Arrow />
          </CategoryWrapper>
        ))}
      </StyledBox>
    </StyledContainer>
  );
};

export default Categories;
