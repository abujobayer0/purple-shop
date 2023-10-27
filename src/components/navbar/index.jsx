import React, { useEffect, useMemo, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Badge, Container, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Wrapper = styled(Box)(() => ({
  flexGrow: 1,
  position: "sticky",
  top: 0,
  zIndex: 101,
}));

const Nav = styled(AppBar)(() => ({
  background: "white",
  boxShadow: "none",
  borderBottom: "1px solid lightgray",
}));

const StyledTypography = styled(Typography)(() => ({
  flexGrow: 1,
  color: "white",
  display: "flex",
  fontWeight: 800,
  alignItems: "center",
  fontSize: { xs: 15, md: 20 },
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const StyledShoppingCart = styled(ShoppingCartIcon)(() => ({
  padding: 10,
  cursor: "pointer !important",
  color: "white",
  borderRadius: 5,
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
}));

const StyledContainer = styled(Container)(() => ({ padding: 0 }));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const LogoWrapper = styled(Box)(() => ({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 13,
    right: -3,
    width: "20px",
    padding: "0 4px",
    cursor: "pointer",
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

const NavBar = ({ cartItems }) => {
  const navigate = useNavigate();
  const prevCartQuantityRef = useRef();
  const [cartAnimation, setAnimation] = React.useState(false);

  const totalCartQuantity = useMemo(() => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }, [cartItems]);

  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    if (prevCartQuantityRef.current < totalCartQuantity) {
      setAnimation(true);

      const timeout = setTimeout(() => {
        setAnimation(false);
      }, 400);

      return () => {
        clearTimeout(timeout);
      };
    }

    prevCartQuantityRef.current = totalCartQuantity;
  }, [totalCartQuantity]);

  return (
    <Wrapper>
      <Nav position="static">
        <StyledContainer>
          <StyledToolbar>
            <LogoWrapper onClick={handleNavigate}>
              <StyledTypography variant="h6" color={"black"} component="div">
                PURPLE SHOP
              </StyledTypography>
            </LogoWrapper>

            <Box>
              <Link to={"/cart"}>
                <IconButton size="small" color="inherit">
                  <button
                    className={`cart-animation ${
                      cartAnimation ? "cart-active" : ""
                    } `}
                  >
                    <StyledBadge
                      badgeContent={totalCartQuantity}
                      color="secondary"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <StyledShoppingCart />
                    </StyledBadge>
                  </button>
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
