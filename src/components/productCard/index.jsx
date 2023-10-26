import React from "react";
import { Card, Typography, Box, Button, Chip, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAddToCart } from "../../hooks/useCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import AddIcon from "@mui/icons-material/Add";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductCardContainer = styled(Card)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  position: "relative",
  textAlign: "start",
  padding: 10,
  marginLeft: "-10px",
  height: "100%",
  justifyContent: "space-between",
}));

const QuantityContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
    width: "100%",
  },
  paddingLeft: 10,
  gap: "0.44rem",
}));

const QuantityControl = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
  marginBottom: "0.5em",
  height: "40px",
  width: "100%",
  textAlign: "center",
  color: "#38453ec9",
  marginTop: 10,
  paddding: 5,
  borderRadius: 5,
  overflow: "hidden",
  border: "1px solid lightgray",
}));

const QuantityButton = styled(Button)(({ theme }) => ({
  cursor: " pointer",
  padding: "0.50rem",
  background: "linear-gradient(to bottom, #C6A4E6, #BAA3E6)",
  color: "#fff",
  transition: "background 0.5s ease-in-out",
  "&:hover": {
    background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  },
  borderRadius: "0px 0px 0px 0px",
}));

const QuantityNumber = styled(Typography)(({ theme }) => ({
  color: "#38453ec9",
  fontWeight: "bold",
  lineHeight: "77.5%",
  letterSpacing: "0.01rem",
  textTransform: "uppercase",
  fontSize: "1.25rem",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1rem",
  margin: "10px 0",
  cursor: "pointer",
  paddingLeft: 10,
  whiteSpace: "wrap",
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
  },
  overflow: "hidden",
  textOverflow: "ellipsis",
}));
const Price = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.2rem",
  paddingLeft: 10,
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
  },
  fontStyle: "italic",
  color: "#8E24AA",
}));

const TagsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  position: "absolute",
  bottom: -12,
  right: 5,
}));

const Tag = styled(Chip)(({ theme }) => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  margin: "2px",
  fontSize: 13,
  height: 25,
  [theme.breakpoints.down("md")]: {
    fontSize: 10,
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingLeft: 10,
  width: "100%",
  justifyContent: "start",
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
    flexDirection: "column",
  },
}));

const ResponsiveLocalOfferIcon = styled(LocalOfferIcon)(({ theme }) => ({
  fontSize: 14,
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
        <img
          src={Product.pictures[0]}
          alt={Product.title}
          style={{ width: "100%", height: "auto" }}
        />
        <TagsContainer>
          {Product.tags.map((tag) => (
            <Tag
              icon={<ResponsiveLocalOfferIcon color="white" />}
              label={tag}
              key={tag}
              color="primary"
            />
          ))}
        </TagsContainer>
      </Link>
      <>
        <Title onClick={() => handleNavigate(Product.id)} variant="h6">
          {Product.title.slice(0, 35)}
        </Title>
        <Price variant="h6">€{Product.price}</Price>
      </>
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
