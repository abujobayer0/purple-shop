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
  Alert,
} from "@mui/material";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BackButton, NavBar } from "../components";
import { useRemoveFromCart, useUpdateCartItemQuantity } from "../hooks/useCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { setDiscount } from "../redux/actions/discountAction";
import useDiscount from "../hooks/useCartCalculations";

const CartsWrapper = styled(Paper)(() => ({
  boxShadow: "none",
  marginTop: "20px",
  marginBottom: "20px",
}));

const OrderSummeryWrapper = styled(Paper)(() => ({
  top: "20px",
  padding: "20px",
  marginTop: "20px",
  position: "sticky",
  boxShadow: "none",
  border: "1px solid #f0f0f0",
}));

const RemoveButton = styled(Button)(() => ({
  color: "#FF0000",
  paddingLeft: 10,
  paddingRight: 10,
  fontWeight: "bold",
  textDecoration: "none",
}));

const CheckoutButton = styled(Button)(() => ({
  width: "100%",
  color: "white",
  fontWeight: "bold",
  textTransform: "uppercase",
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
}));

const ApplyButton = styled(Button)(() => ({
  width: "100%",
  fontWeight: "bold",
  background: "#86A789",
  color: "white",
  "&:hover": {
    background: "#B2C8BA",
  },
  textTransform: "uppercase",
}));

const QuantityButtonGroup = styled(ButtonGroup)(() => ({
  "& button": {
    color: "white",
    borderColor: "lightgray",
    background: "linear-gradient(to bottom, #bd68d4, #8959db)",
  },
  "& button:first-of-type": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  "& button:last-of-type": {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  "& button:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
  "& span": {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    justifyContent: "center",
  },
}));

const CostWrappper = styled(Grid)(() => ({
  padding: "10px 0",
  justifyContent: "space-between",
}));

const ImageGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: { display: "none" },
}));

const CartTableContainer = styled(TableContainer)(() => ({
  padding: 0,
  boxShadow: "none",
  border: "1px solid lightgray",
}));

const CartTableCell = styled(TableCell)(() => ({ textAlign: "center" }));

const IntroBox = styled(Box)(() => ({
  color: "white",
  borderRadius: 5,
  marginBottom: 10,
  padding: "10px 25px",
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
}));

const PromoFieldWrapper = styled(Box)(() => ({ padding: "20px 0" }));

const TableWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

const ProductTitle = styled(Box)(({ theme }) => ({
  minWidth: 200,
  paddingLeft: 10,
  paddingRight: 10,
  cursor: "pointer",
  fontWeight: "bold",
}));

const QuantityNumber = styled(Typography)(({ theme }) => ({
  minWidth: 50,
  display: "flex",
  background: "#f0f0f0",
  height: "100%",
  fontWeight: "bold",
  color: "#38453ec9",
  lineHeight: "77.5%",
  fontSize: "1.25rem",
  alignItems: "center",
  textAlign: "center",
  letterSpacing: "0.01rem",
  textTransform: "uppercase",
  justifyContent: "center",
}));

const ItemText = styled(Typography)(() => ({ textTransform: "uppercase" }));

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeFromCart = useRemoveFromCart();
  const [promoCode, setPromoCode] = React.useState("");
  const updateCartItemQuantity = useUpdateCartItemQuantity();
  const { discount } = useDiscount();

  const PROMO_CODE = "jamie23";

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

  const handleNavigate = (id) => {
    navigate(`/item/${id}`);
  };

  const handleCheckoutNavigate = () => {
    navigate("/checkout");
  };

  const handleSetDiscount = () => {
    dispatch(setDiscount(10));
    setPromoCode("");
  };

  const totalWithoutDiscount = cartItems.reduce(
    (total, product) =>
      total + parseFloat(product.product.price) * product.quantity,
    0
  );

  const discountedTotal =
    discount && discount.discount
      ? totalWithoutDiscount -
        (totalWithoutDiscount * parseFloat(discount.discount)) / 100
      : totalWithoutDiscount;

  return (
    <React.Fragment>
      <NavBar />
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
                                <ProductTitle
                                  onClick={() =>
                                    handleNavigate(item.product.id)
                                  }
                                >
                                  {item.product.title}
                                </ProductTitle>
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
                                <RemoveIcon />
                              </Button>
                              <Box>
                                <QuantityNumber>{item.quantity}</QuantityNumber>
                              </Box>
                              <Button
                                onClick={() =>
                                  handleIncreaseQuantity({
                                    id: item.product.id,
                                    quantity: item.quantity,
                                  })
                                }
                              >
                                <AddIcon />
                              </Button>
                            </QuantityButtonGroup>
                          </CartTableCell>

                          <CartTableCell>
                            €{parseFloat(item.product.price).toFixed(2)}
                          </CartTableCell>

                          <CartTableCell>
                            €
                            {(
                              parseFloat(item.product.price) *
                              parseFloat(item.quantity)
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

          <Grid item xs={12} sm={12} mb={10} md={7} lg={4}>
            <OrderSummeryWrapper>
              <Typography variant="h5" gutterBottom>
                Order Summary
              </Typography>

              <Grid container gap={20} justify="space-between">
                <ItemText variant="overline">Items {cartItems.length}</ItemText>
                <Typography variant="overline">
                  €{totalWithoutDiscount}
                </Typography>
              </Grid>

              <PromoFieldWrapper>
                <Alert
                  sx={{ marginBottom: 2 }}
                  color="secondary"
                  severity="success"
                >
                  USE "jamie23" FOR 10% OFF
                </Alert>
                <TextField
                  id="promo"
                  label="Promo Code"
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </PromoFieldWrapper>

              {promoCode === PROMO_CODE ? (
                <ApplyButton variant="contained" onClick={handleSetDiscount}>
                  Apply
                </ApplyButton>
              ) : (
                <ApplyButton
                  variant="contained"
                  disabled
                  onClick={handleSetDiscount}
                >
                  Apply
                </ApplyButton>
              )}

              <hr style={{ marginTop: "20px" }} />

              <CostWrappper container gap={20}>
                <Typography variant="overline">Sub Total </Typography>
                <Typography variant="overline">
                  €{totalWithoutDiscount.toFixed(2)}
                </Typography>
              </CostWrappper>
              <CostWrappper container gap={20}>
                <Typography variant="overline">Discount</Typography>
                <Typography variant="overline">{discount.discount}%</Typography>
              </CostWrappper>
              <CostWrappper container gap={20}>
                <Typography variant="overline">Total </Typography>
                <Typography variant="overline">
                  €{discountedTotal.toFixed(2)}
                </Typography>
              </CostWrappper>
              {cartItems.length >= 1 ? (
                <CheckoutButton
                  onClick={handleCheckoutNavigate}
                  variant="contained"
                  color="primary"
                >
                  Checkout
                </CheckoutButton>
              ) : (
                <CheckoutButton disabled variant="contained" color="primary">
                  Checkout
                </CheckoutButton>
              )}
            </OrderSummeryWrapper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};

export default connect(mapStateToProps)(Cart);
