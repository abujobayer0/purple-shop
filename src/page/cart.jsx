import React from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Table,
  ButtonGroup,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Box,
  styled,
} from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BackButton } from "../components";
import { useRemoveFromCart, useUpdateCartItemQuantity } from "../hooks/useCart";

const CartsWrapper = styled(Paper)(() => ({
  marginTop: "20px",
  marginBottom: "20px",
  boxShadow: "none",
}));

const OrderSummeryWrapper = styled(Paper)(() => ({
  padding: "20px",
  marginTop: "20px",
  position: "sticky",
  top: "20px",
}));

const RemoveButton = styled(Button)(() => ({
  fontWeight: "bold",
  color: "#FF0000",
  textDecoration: "none",
  paddingLeft: 10,
  paddingRight: 10,
}));

const CheckoutButton = styled(Button)(() => ({
  width: "100%",
  textTransform: "uppercase",
  fontWeight: "bold",
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
}));

const ApplyButton = styled(Button)(() => ({
  width: "100%",
  textTransform: "uppercase",
  fontWeight: "bold",
  background: "lightgray",
  color: "black",
}));

const QuantityButtonGroup = styled(ButtonGroup)(() => ({
  "& button": {
    borderColor: "lightgray",
    color: "white",
    background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  },
  "& button:first-of-type": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  "& button:last-of-type": {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  "& button:not(:first-of-type):not(:last-of-type)": {
    borderRadius: 0,
  },
  "& span": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
  },
}));

const CostWrappper = styled(Grid)(() => ({
  justifyContent: "space-between",
  padding: "10px 0",
}));

const ImageGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: { display: "none" },
}));

const CartTableContainer = styled(TableContainer)(() => ({
  boxShadow: "none",
  padding: 0,
  border: "1px solid lightgray",
}));

const CartTableCell = styled(TableCell)(() => ({ textAlign: "center" }));

const IntroBox = styled(Box)(() => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
  padding: "10px 25px",
  borderRadius: 5,
  marginBottom: 10,
}));

const PromoFieldWrapper = styled(Box)(() => ({ padding: "20px 0" }));

const TableWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const ProductTitle = styled(Box)(({ theme }) => ({
  fontWeight: "bold",
  paddingLeft: 10,
  paddingRight: 10,
  [theme.breakpoints.up("md")]: {
    minWidth: 200,
  },
}));

const ItemText = styled(Typography)(() => ({ textTransform: "uppercase" }));

const Cart = ({ cartItems }) => {
  const removeFromCart = useRemoveFromCart();
  const updateCartItemQuantity = useUpdateCartItemQuantity();

  const handleIncreaseQuantity = ({ id, quantity }) => {
    const newQuantity = quantity + 1;
    updateCartItemQuantity(id, newQuantity);
  };

  const handleDecreaseQuantity = ({ id, quantity }) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      updateCartItemQuantity(id, newQuantity);
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <Container maxWidth="lg">
      <BackButton />
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} lg={8}>
          <CartsWrapper>
            <IntroBox>
              <Typography variant="h5" gutterBottom>
                Shopping Cart
              </Typography>
              <Typography variant="h6" gutterBottom>
                {cartItems.length} Item{cartItems.length !== 1 ? "s" : ""}
              </Typography>
            </IntroBox>

            <TableWrapper>
              <CartTableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Unit Price</TableCell>
                      <TableCell>Total Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.product.id}>
                        <TableCell>
                          <Grid container alignItems="center" spacing={1}>
                            <ImageGrid item sm={5} md={4}>
                              <img
                                src={item.product.pictures[0]}
                                alt={item.product.title}
                                style={{ height: "144px" }}
                              />
                            </ImageGrid>
                            <Grid item xs={12} sm={7} md={8}>
                              <Link to={`/item/${item.product.id}`}>
                                <ProductTitle variant="subtitle1">
                                  {item.product.title}
                                </ProductTitle>
                              </Link>
                              <RemoveButton
                                onClick={() =>
                                  handleRemoveFromCart(item.product.id)
                                }
                              >
                                Remove
                              </RemoveButton>
                            </Grid>
                          </Grid>
                        </TableCell>
                        <CartTableCell>
                          <QuantityButtonGroup
                            variant="outlined"
                            aria-label="outlined button group"
                          >
                            <Button
                              onClick={() =>
                                handleDecreaseQuantity({
                                  id: item.product.id,
                                  quantity: item.quantity,
                                })
                              }
                            >
                              -
                            </Button>
                            <Box>
                              <span>{item.quantity}</span>
                            </Box>
                            <Button
                              onClick={() =>
                                handleIncreaseQuantity({
                                  id: item.product.id,
                                  quantity: item.quantity,
                                })
                              }
                            >
                              +
                            </Button>
                          </QuantityButtonGroup>
                        </CartTableCell>
                        <CartTableCell>
                          €{parseInt(item.product.price).toFixed(2)}
                        </CartTableCell>
                        <CartTableCell>
                          €
                          {(
                            parseInt(item.product.price) *
                            parseInt(item.quantity)
                          ).toFixed(2)}
                        </CartTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CartTableContainer>
            </TableWrapper>
          </CartsWrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={4}>
          <OrderSummeryWrapper>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>

            <Grid container gap={20} justify="space-between">
              <ItemText variant="overline">Items {cartItems.length}</ItemText>
              <Typography variant="overline">
                €
                {cartItems
                  .reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </Typography>
            </Grid>
            <PromoFieldWrapper>
              <TextField
                id="promo"
                label="Promo Code"
                variant="outlined"
                fullWidth
              />
            </PromoFieldWrapper>

            <ApplyButton variant="contained" disabled>
              Apply
            </ApplyButton>

            <hr style={{ marginTop: "20px" }} />

            <CostWrappper container gap={20}>
              <Typography variant="overline">Total cost</Typography>
              <Typography variant="overline">
                €
                {cartItems
                  .reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </Typography>
            </CostWrappper>

            <CheckoutButton variant="contained" color="primary">
              Checkout
            </CheckoutButton>
          </OrderSummeryWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps)(Cart);
