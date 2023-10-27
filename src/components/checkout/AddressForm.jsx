import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

const AddressForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <Alert severity="warning">Optional Fields Demo !</Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            color="secondary"
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            color="secondary"
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            color="secondary"
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            color="secondary"
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            color="secondary"
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            color="secondary"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            color="secondary"
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            color="secondary"
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default AddressForm;
