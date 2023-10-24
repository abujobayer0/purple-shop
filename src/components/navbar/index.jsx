import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Container, styled } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Wrapper = styled(Box)({
  flexGrow: 1,
});

const Nav = styled(AppBar)({
  background: "white",
  boxShadow: "none",
  borderBottom: "1px solid lightgray",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  fontSize: { xs: 15, md: 20 },
});

const StyledShoppingCart = styled(ShoppingCartIcon)({
  color: "rgb(248, 139, 286)",
});

const StyledContainer = styled(Container)({ padding: 10 });

export default function NavBar() {
  return (
    <Wrapper>
      <Nav position="static">
        <StyledContainer>
          <Toolbar>
            <StyledTypography variant="h6" color={"black"} component="div">
              <img
                src="https://i.ibb.co/K0DT2fS/pp.jpg"
                style={{ width: 50 }}
                alt="logo"
              />
              PURPLE SHOP
            </StyledTypography>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <StyledShoppingCart />
              </IconButton>
            </div>
          </Toolbar>
        </StyledContainer>
      </Nav>
    </Wrapper>
  );
}
