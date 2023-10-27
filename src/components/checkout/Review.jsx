import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const Review = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem key={product.product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.product?.title}
              secondary={product.product.description}
            />
            <Typography variant="body2">
              {`$${(product.product.price * product.quantity).toFixed(2)}`}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`$${cartItems
              .reduce(
                (total, product) =>
                  total + product.product.price * product.quantity,
                0
              )
              .toFixed(2)}`}
          </Typography>
        </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>The Granary</Typography>
          <Typography gutterBottom>
            The Granary, Kingston House Estate, Kingston Bagpuize, Abingdon,
            Oxfordshire OX13 5AX, UK
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card type</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Visa</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card holder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>James Gale</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>xxxx-xxxx-xxxx-1234</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Expiry date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>04/2024</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
