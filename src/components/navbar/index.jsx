import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Badge, Container, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
  fontWeight: 800,
  display: "flex",
  alignItems: "center",
  fontSize: { xs: 15, md: 20 },
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  color: "white",
}));

const StyledShoppingCart = styled(ShoppingCartIcon)(() => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
  padding: 10,
  borderRadius: 5,
}));

const StyledContainer = styled(Container)(() => ({ padding: 0 }));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const LogoWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavBar = ({ cartItems }) => {
  const totalCartQuantity = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  return (
    <Wrapper>
      <Nav position="static">
        <StyledContainer>
          <StyledToolbar>
            <LogoWrapper>
              <StyledTypography variant="h6" color={"black"} component="div">
                PURPLE SHOP
              </StyledTypography>
            </LogoWrapper>

            <Box>
              <Link to={"/cart"}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <StyledBadge
                    badgeContent={totalCartQuantity}
                    color="secondary"
                  >
                    <StyledShoppingCart />
                  </StyledBadge>
                </IconButton>
              </Link>
            </Box>
          </StyledToolbar>
        </StyledContainer>
      </Nav>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps)(NavBar);
