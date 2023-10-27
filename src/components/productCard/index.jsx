import React from "react";
import { Card, Typography, Box, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAddToCart } from "../../hooks/useCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductCardContainer = styled(Card)(({ theme }) => ({
  padding: 10,
  width: "100%",
  height: "100%",
  display: "flex",
  boxShadow: "none",
  textAlign: "start",
  alignItems: "start",
  marginLeft: "-10px",
  border: "1px solid #f0f0f0",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: { width: 380 },
}));

const QuantityContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  gap: "0.44rem",
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: { width: "100%" },
}));

const QuantityControl = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
  gap: "1.25rem",
  marginTop: 10,
  height: "40px",
  display: "flex",
  borderRadius: 5,
  overflow: "hidden",
  color: "#38453ec9",
  textAlign: "center",
  alignItems: "center",
  marginBottom: "0.5em",
  border: "1px solid lightgray",
}));

const QuantityButton = styled(Box)(({ theme }) => ({
  width: "100%",
  color: "#fff",
  cursor: " pointer",
  padding: "0.50rem",
  borderRadius: "0px 0px 0px 0px",
  transition: "background 0.5s ease-in-out",
  background: "linear-gradient(to bottom, #C6A4E6, #BAA3E6)",
  "&:hover": { background: "linear-gradient(to bottom, #8E24AA, #673AB7)" },
}));

const QuantityNumber = styled(Typography)(({ theme }) => ({
  width: "100%",
  display: "flex",
  fontWeight: "bold",
  color: "#38453ec9",
  lineHeight: "77.5%",
  fontSize: "1.25rem",
  alignItems: "center",
  letterSpacing: "0.01rem",
  textTransform: "uppercase",
  justifyContent: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1rem",
  marginTop: "10px",
  cursor: "pointer",
  whiteSpace: "wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const Price = styled(Typography)(({ theme }) => ({
  color: "#8E24AA",
  fontWeight: "bold",
  fontSize: "1.2rem",
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "start",
  [theme.breakpoints.down("md")]: { flexDirection: "column" },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  height: 220,
  width: "100%",
  display: "flex",
  overflow: "hidden",
  alignItems: "start",
  position: "relative",
  justifyContent: "center",
  "&:hover": { borderRadius: 30 },
  transition: "all 0.3s ease-in-out",
  [theme.breakpoints.up("md")]: { height: 400 },
  [theme.breakpoints.up("lg")]: { height: 350 },
}));

const HoverableImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  transition: "all 0.3s ease-in-out",
  "&:hover": { transform: "scale(1.1)" },
}));

const ProductCard = ({ Product }) => {
  const [quantity, setQuantity] = React.useState(1);
  const addToCart = useAddToCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(Product, quantity);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCartClick = (e) => {
    const button = e.currentTarget;
    button.classList.add("clicked");
    setTimeout(() => {
      handleAddToCart();
      button.classList.remove("clicked");
    }, 2000);
  };

  const handleNavigate = (id) => {
    navigate(`/item/${Product.id}`);
  };

  return (
    <ProductCardContainer>
      <Link to={`/item/${Product.id}`} style={{ position: "relative" }}>
        <ImageWrapper>
          <HoverableImage src={Product.pictures[0]} alt={Product.title} />
        </ImageWrapper>
      </Link>

      <React.Fragment>
        <Title onClick={() => handleNavigate(Product.id)} variant="h6">
          {Product.title.slice(0, 35)}
        </Title>
        <Price variant="h6">€{Product.price}</Price>
      </React.Fragment>

      <QuantityContainer>
        <QuantityControl>
          <QuantityButton onClick={handleDecreaseQuantity}>
            <RemoveIcon />
          </QuantityButton>
          <QuantityNumber>{quantity}</QuantityNumber>
          <QuantityButton onClick={handleIncreaseQuantity}>
            <AddIcon />
          </QuantityButton>
        </QuantityControl>
      </QuantityContainer>

      <ButtonContainer>
        <button className="cart-button" onClick={handleCartClick}>
          <span className="add-to-cart">Add to cart</span>
          <span className="added">
            <FileDownloadDoneIcon />
          </span>
          <ShoppingCart className="fas fa-shopping-cart" />
          <ShoppingBasketIcon className="fas fa-box" />
        </button>
      </ButtonContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
