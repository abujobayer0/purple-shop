import React from "react";
import { Container, Typography, styled, Box, Button } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  marginBottom: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  textTransform: "uppercase",
}));

const IntroBox = styled(Box)(({ theme }) => ({
  color: "white",
  borderRadius: 5,
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const CategoryWrapper = styled(Box)(({ theme }) => ({
  height: 40,
  width: "100%",
  display: "flex",
  cursor: "pointer",
  borderRadius: 5,
  alignItems: "center",
  border: "1px solid lightgray",
  transition: "background 0.3s",
  justifyContent: "space-between",
}));

const Category = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 600,
  padding: "0 25px",
  textTransform: "uppercase",
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

const ResetButton = styled(Button)(() => ({
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  color: "white",
  fontWeight: 800,
  fontSize: 10,
  border: "3px solid #bd68d4",
}));

const Categories = ({ categories, setTag, closeDrawer }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isClearBtn = location.pathname;

  const handleRoute = () => {
    setTag("");
    closeDrawer();
  };

  const handleReset = () => {
    navigate("/");
    setTag("");
    closeDrawer();
  };

  return (
    <StyledContainer>
      <IntroBox>
        <Title variant="h6">
          Categories
          {isClearBtn !== "/" && (
            <ResetButton onClick={handleReset}>CLEAR</ResetButton>
          )}
        </Title>
      </IntroBox>
      <StyledBox>
        {categories?.map((category, indx) => (
          <NavLink
            key={indx}
            onClick={handleRoute}
            to={`/category/${category}`}
          >
            <CategoryWrapper>
              <Category variant="h6">{category}</Category>
              <Arrow />
            </CategoryWrapper>
          </NavLink>
        ))}
      </StyledBox>
    </StyledContainer>
  );
};

export default Categories;
