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
import { useRemoveFromCart, useUpdateCartItemQuantity } from "../hooks/useCart";
import { Link } from "react-router-dom";
import { BackButton } from "../components";

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

const TableWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const ProductTitle = styled(Box)(() => ({
  fontWeight: "bold",
}));

const RemoveButton = styled(Button)(() => ({
  fontWeight: "bold",
  color: "#FF0000",
  textDecoration: "none",
}));

const CartTableCell = styled(TableCell)(() => ({ textAlign: "center" }));

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
            <Box
              sx={{
                background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
                color: "white",
                padding: "10px 25px",
                borderRadius: 1,
                mb: 1,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Shopping Cart
              </Typography>
              <Typography variant="h6" gutterBottom>
                {cartItems.length} Item{cartItems.length !== 1 ? "s" : ""}
              </Typography>
            </Box>

            <TableWrapper>
              <TableContainer
                sx={{
                  boxShadow: "none",
                  padding: 0,
                  border: "1px solid lightgray",
                }}
                component={Paper}
              >
                <Table>
                  {" "}
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
                            <Grid
                              item
                              sx={{ display: { xs: "none", md: "flex" } }} // Hide the image on mobile
                              sm={5}
                              md={4}
                            >
                              <img
                                src={item.product.pictures[0]}
                                alt={item.product.title}
                                style={{ height: "144px" }}
                              />
                            </Grid>
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
                          <ButtonGroup
                            variant="outlined"
                            aria-label="outlined button group"
                            sx={{
                              "& button": {
                                borderColor: "lightgray", // Border color for all buttons
                                color: "white", // Text color for all buttons (white)
                                background:
                                  "linear-gradient(to bottom, #8E24AA, #673AB7)", // Gradient background
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
                            }}
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
                          </ButtonGroup>
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
              </TableContainer>
            </TableWrapper>
          </CartsWrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={4}>
          <OrderSummeryWrapper>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>

            <Grid container gap={20} justify="space-between">
              <Typography
                variant="overline"
                sx={{ textTransform: "uppercase" }}
              >
                Items {cartItems.length}
              </Typography>
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
            <Box sx={{ padding: "20px 0" }}>
              <TextField
                id="promo"
                label="Promo Code"
                variant="outlined"
                fullWidth
              />
            </Box>

            <Button
              variant="contained"
              disabled
              sx={{
                width: "100%",
                textTransform: "uppercase",
                fontWeight: "bold",
                background: "lightgray",
                color: "black",
              }}
            >
              Apply
            </Button>

            <hr style={{ marginTop: "20px" }} />

            <Grid
              container
              gap={20}
              justify="space-between"
              sx={{ padding: "10px 0" }}
            >
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
            </Grid>

            <Button
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                textTransform: "uppercase",
                fontWeight: "bold",
                background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
                color: "white",
              }}
            >
              Checkout
            </Button>
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
