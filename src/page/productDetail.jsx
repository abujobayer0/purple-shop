import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
  Box,
  styled,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { BackButton } from "../components";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import { useAddToCart } from "../hooks/useCart";

const PurplePaper = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
  border: "1px solid lightgray",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const CartButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  height: 50,
  color: "white",
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: 220,
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "2.8rem",
  color: "#333",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  color: "#555",
}));

const Price = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "#8E24AA",
}));

const Info = styled(Typography)(({ theme }) => ({
  color: "#555",
  marginTop: 5,
  display: "flex",
  flexDirection: "column",
  marginBottom: 5,
}));

const CategoriesChip = styled(Chip)(({ theme }) => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
  marginRight: 5,
  padding: 1,
}));

const CollectionChip = styled(Chip)(({ theme }) => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
  padding: 1,
  marginRight: 5,
}));

const TagsChip = styled(Chip)(({ theme }) => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  padding: 1,
  marginRight: 5,
  color: "white",
}));

const QuantityField = styled(TextField)(({ theme }) => ({
  flex: 1,
  width: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const IconBtn = styled(IconButton)(({ theme }) => ({
  background: "#EDE4FF",
  color: "#6527BE",
  borderRadius: "0 5px 5px 0",
}));

const QuantityWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
  background: "rgba(237, 228, 255, 0.9)",
  borderRadius: 5,
  paddingLeft: 1,
  paddingRight: 1,
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: 220,
  },
}));

const TextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  border: "1px solid lightgray",
  padding: 50,
  borderRadius: 5,
  marginBottom: 50,
}));

const ProductDetail = () => {
  const { itemId } = useParams();
  const products = useFetchProducts("/items");
  const product = products.find((i) => i?.id === parseInt(itemId));
  const { title, description, price, pictures } = product;
  const [quantity, setQuantity] = useState(1);
  const addToCart = useAddToCart();

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Container maxWidth="lg">
      <BackButton />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <PurplePaper>
            <img
              src={pictures[0]}
              alt={title}
              style={{ width: "100%", borderRadius: 0 }}
            />
          </PurplePaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextWrapper>
            <Title variant="h4" gutterBottom>
              {title}
            </Title>{" "}
            <Price variant="h6" color="textSecondary">
              Price: ${price}
            </Price>
            <Description variant="subtitle1" gutterBottom>
              {description}
            </Description>
            <Box
              display={"flex"}
              justifyContent={"start"}
              flexWrap={"wrap"}
              gap={{ xs: 1, md: 5 }}
              alignItems={"center"}
              width={1}
            >
              <Info
                variant="body2"
                justifyContent={"center"}
                color="textSecondary"
              >
                <Typography>Categories: </Typography>
                <Typography>
                  {product.categories.map((category) => (
                    <CategoriesChip
                      key={category}
                      label={category}
                      size="small"
                    />
                  ))}
                </Typography>
              </Info>

              <Info variant="body2" color="textSecondary">
                <Typography>Collections: </Typography>
                <Typography>
                  {product.collections.map((collection) => (
                    <CollectionChip
                      key={collection}
                      label={collection}
                      size="small"
                    />
                  ))}
                </Typography>
              </Info>

              <Info variant="body2" color="textSecondary">
                <Typography>Tags: </Typography>

                <Typography>
                  {product.tags.map((tag) => (
                    <TagsChip
                      key={tag}
                      label={tag}
                      size="small"
                      icon={<LocalOfferIcon fontSize="small" color="white" />}
                    />
                  ))}
                </Typography>
              </Info>
            </Box>
            <Info variant="body2" color="textSecondary">
              Quantity:{" "}
              <QuantityWrapper>
                <IconBtn onClick={handleDecreaseQuantity}>
                  <RemoveIcon />
                </IconBtn>
                <QuantityField
                  variant="outlined"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  InputProps={{
                    inputProps: { min: 1 },
                    sx: {
                      "& fieldset": { border: "none" },
                    },
                  }}
                />
                <IconBtn onClick={handleIncreaseQuantity}>
                  <AddIcon />
                </IconBtn>
              </QuantityWrapper>
            </Info>
            <CartButton
              variant="contained"
              onClick={handleAddToCart}
              startIcon={<ShoppingCart />}
            >
              Add to Cart
            </CartButton>
          </TextWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
