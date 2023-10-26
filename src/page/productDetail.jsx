import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  styled,
  Chip,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { BackButton, NavBar } from "../components";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useParams } from "react-router-dom";
import useFetchProducts from "../hooks/useFetchProducts";
import { useAddToCart } from "../hooks/useCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

const PurplePaper = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
  border: "1px solid lightgray",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "2.8rem",
  [theme.breakpoints.down("md")]: { fontSize: "1.8rem" },
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

const QuantityInfo = styled(Typography)(({ theme }) => ({
  color: "#555",
  marginTop: 5,
  display: "flex",
  flexDirection: "column",
  marginBottom: 5,
  width: "100%",
  [theme.breakpoints.up("lg")]: { width: "50%" },
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

const QuantityContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
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
  "&:hover": { background: "linear-gradient(to bottom, #8E24AA, #673AB7)" },
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

const TextWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  border: "1px solid lightgray",
  padding: 50,
  [theme.breakpoints.down("md")]: { padding: 30 },
  borderRadius: 5,
  marginBottom: 50,
}));

const ProductDetail = () => {
  const { itemId } = useParams();
  const { products } = useFetchProducts("/items");
  const product = products.find((i) => i?.id === parseInt(itemId));
  const { title, description, price, pictures } = product;
  const [quantity, setQuantity] = useState(1);
  const addToCart = useAddToCart();

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

  const handleCartClick = (e) => {
    const button = e.currentTarget;
    button.classList.add("clicked");
    setTimeout(() => {
      handleAddToCart();
      button.classList.remove("clicked");
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <React.Fragment>
      <NavBar />
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
              </Title>
              <Price variant="h6">Price: €{price}</Price>
              <Description variant="subtitle1" gutterBottom>
                {description}
              </Description>
              <Box
                display={"flex"}
                justifyContent={"start"}
                flexWrap={"wrap"}
                gap={{ xs: 1, md: 0, lg: 5 }}
                alignItems={"center"}
                width={1}
              >
                <Info justifyContent={"center"}>
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

                <Info>
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

                <Info>
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
              <QuantityInfo>
                Quantity:
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
              </QuantityInfo>
              <button className="cart-button" onClick={handleCartClick}>
                <span className="add-to-cart">Add to cart</span>
                <span className="added">
                  <FileDownloadDoneIcon />
                </span>
                <ShoppingCart className="fas fa-shopping-cart" />
                <ShoppingBasketIcon className="fas fa-box" />
              </button>
            </TextWrapper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ProductDetail;
