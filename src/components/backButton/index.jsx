import React from "react";
import { Button, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const goBack = () => {
    window.history.back(); // This function will take you back to the previous page
  };

  return (
    <Box
      sx={{
        margin: { xs: "50px 25px", md: "25px 0" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={goBack}>
        Back
      </Button>
    </Box>
  );
};

export default BackButton;
