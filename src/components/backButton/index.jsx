import React from "react";
import { Button, Box, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Wrapper = styled(Box)(() => ({
  display: "flex",
  margin: "25px 0",
  alignItems: "center",
}));

const BackBtn = styled(Button)(() => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
  height: "40px",
  border: "none",
  "&:hover": { border: "none" },
}));

const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Wrapper>
      <BackBtn
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={goBack}
      >
        Back
      </BackBtn>
    </Wrapper>
  );
};

export default BackButton;
