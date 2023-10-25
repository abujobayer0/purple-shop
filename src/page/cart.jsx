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
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Box,
} from "@mui/material";
import { connect } from "react-redux";
import { useRemoveFromCart, useUpdateCartItemQuantity } from "../hooks/useCart";
import { Link } from "react-router-dom";

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
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} lg={8}>
          <Paper style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Shopping Cart
            </Typography>
            <Typography variant="h6" gutterBottom>
              {cartItems.length} Item{cartItems.length !== 1 ? "s" : ""}
            </Typography>

            <Box display="flex" justifyContent="center">
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.product.id}>
                        <TableCell>
                          <Grid container alignItems="center" spacing={1}>
                            <Grid item xs={12} sm={5} md={4}>
                              <img
                                src={item.product.pictures[0]}
                                alt={item.product.title}
                                style={{ height: "144px" }}
                              />
                            </Grid>
                            <Grid item xs={12} sm={7} md={8}>
                              <Link to={`/item/${item.product.id}`}>
                                <Typography
                                  variant="subtitle1"
                                  style={{ fontWeight: "bold" }}
                                >
                                  {item.product.title}
                                </Typography>
                              </Link>
                              <Button
                                sx={{
                                  fontWeight: "bold",
                                  color: "#FF0000",
                                  textDecoration: "none",
                                }}
                                onClick={() =>
                                  handleRemoveFromCart(item.product.id)
                                }
                              >
                                Remove
                              </Button>
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell style={{ textAlign: "center" }}>
                          <ButtonGroup
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
                              <span
                                style={{
                                  padding: "10px 20px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderTop: "1px solid lightgray",
                                  borderLeft: "1px solid lightgray",
                                  borderBottom: "1px solid lightgray",
                                }}
                              >
                                {item.quantity}
                              </span>
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
                        </TableCell>
                        <TableCell style={{ textAlign: "center" }}>
                          ${parseInt(item.product.price).toFixed(2)}
                        </TableCell>
                        <TableCell style={{ textAlign: "center" }}>
                          $
                          {(
                            parseInt(item.product.price) *
                            parseInt(item.quantity)
                          ).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5} lg={4}>
          <Paper
            style={{
              padding: "20px",
              marginTop: "20px",
              position: "sticky",
              top: "20px",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>

            <Grid container justify="space-between">
              <Typography
                variant="overline"
                style={{ textTransform: "uppercase" }}
              >
                Items {cartItems.length}
              </Typography>
              <Typography variant="overline">
                $
                {cartItems
                  .reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </Typography>
            </Grid>
            <div style={{ padding: "20px 0" }}>
              <TextField
                id="promo"
                label="Promo Code"
                variant="outlined"
                fullWidth
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              style={{
                width: "100%",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Apply
            </Button>

            <hr style={{ marginTop: "20px" }} />

            <Grid
              container
              justify="space-between"
              style={{ padding: "10px 0" }}
            >
              <Typography variant="overline">Total cost</Typography>
              <Typography variant="overline">
                $
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
              }}
            >
              Checkout
            </Button>
          </Paper>
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
