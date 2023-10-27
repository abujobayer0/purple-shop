import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

const PaymentForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>

      <Alert severity="warning">Optional Fields Demo !</Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            color="secondary"
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            color="secondary"
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            color="secondary"
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            color="secondary"
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
