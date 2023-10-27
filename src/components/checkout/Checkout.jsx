import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { styled } from "@mui/material";
import Review from "./Review";
import BackButton from "../backButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import VerifiedIcon from "@mui/icons-material/Verified";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useDispatch } from "react-redux";
import { setDiscount } from "../../redux/actions/discountAction";
import { clearCart } from "../../redux/actions/cartAction";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(to bottom, #bd68d4, #8959db)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "linear-gradient(to bottom, #bd68d4, #8959db)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    boxShadow: "none",
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  boxShadow: "none",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: "linear-gradient(to bottom, #bd68d4, #8959db)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage: "linear-gradient(to bottom, #bd68d4, #8959db)",
  }),
}));

const NextButton = styled(Button)(() => ({
  marginTop: 24,
  marginLeft: 8,
  color: "white",
  fontWeight: "bold",
  textTransform: "uppercase",
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
}));

const CheckoutBackButton = styled(Button)(() => ({
  marginTop: 24,
  marginLeft: 8,
  color: "white",
  fontWeight: "bold",
  textTransform: "uppercase",
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
}));

const LogoWrapper = styled(Box)(() => ({
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledTypography = styled(Typography)(() => ({
  flexGrow: 1,
  color: "white",
  display: "flex",
  fontWeight: 800,
  alignItems: "center",
  fontSize: { xs: 15, md: 20 },
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const Title = styled(Typography)(() => ({
  color: "white",
  borderRadius: 5,
  fontWeight: 500,
  background: "linear-gradient(to bottom, #bd68d4, #8959db)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
}));

const ColorlibStepIcon = (props) => {
  const { active, completed, className } = props;

  const icons = {
    1: <LocalShippingIcon />,
    2: <PaymentIcon />,
    3: <VerifiedIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
};

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://purple-shop.vercel.app/">
        Purple Shop
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const steps = ["Shipping address", "Payment details", "Review your order"];

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
};

export const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if (activeStep === steps.length - 1) {
      dispatch(setDiscount(0));
      dispatch(clearCart());
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "white",
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Container>
          <Toolbar>
            <LogoWrapper>
              <StyledTypography variant="h6" color={"black"} component="div">
                PURPLE SHOP
              </StyledTypography>
            </LogoWrapper>
          </Toolbar>
        </Container>
      </AppBar>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <BackButton />
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            boxShadow: "none",
            border: "1px solid #f0f0f0",
          }}
        >
          <Title component="h4" variant="h4" align="center">
            Checkout
          </Title>
          <Stepper
            activeStep={activeStep}
            connector={<ColorlibConnector />}
            sx={{
              paddingTop: 3,
              paddingBottom: 5,
            }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={ColorlibStepIcon}
                  completed={index < activeStep}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <CheckoutBackButton onClick={handleBack}>
                    Back
                  </CheckoutBackButton>
                )}

                <NextButton variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </NextButton>
              </Box>
            </React.Fragment>
          )}
        </Paper>

        <Copyright />
      </Container>
    </React.Fragment>
  );
};
