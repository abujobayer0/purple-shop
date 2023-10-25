import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Container, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Wrapper = styled(Box)(() => ({
  flexGrow: 1,
}));

const Nav = styled(AppBar)(() => ({
  background: "white",
  boxShadow: "none",
  borderBottom: "1px solid lightgray",
}));

const StyledTypography = styled(Typography)(() => ({
  flexGrow: 1,
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  fontSize: { xs: 15, md: 20 },
}));

const StyledShoppingCart = styled(ShoppingCartIcon)(() => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
  padding: 10,
  borderRadius: 5,
}));

const StyledContainer = styled(Container)(() => ({ padding: 10 }));

const StyledToolbar = styled(Toolbar)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const LogoWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const NavBar = () => {
  return (
    <Wrapper>
      <Nav position="static">
        <StyledContainer>
          <StyledToolbar>
            <LogoWrapper>
              <img
                src="https://i.ibb.co/K0DT2fS/pp.jpg"
                style={{ width: 50 }}
                alt="logo"
              />
              <StyledTypography variant="h6" color={"black"} component="div">
                PURPLE SHOP
              </StyledTypography>
            </LogoWrapper>

            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <StyledShoppingCart />
              </IconButton>
            </Box>
          </StyledToolbar>
        </StyledContainer>
      </Nav>
    </Wrapper>
  );
};
export default NavBar;
