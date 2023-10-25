import React from "react";
import { Button, Box, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Wrapper = styled(Box)(() => ({
  margin: "25px 0",
  display: "flex",
  alignItems: "center",
}));

const BackBtn = styled(Button)(() => ({
  background: "linear-gradient(to bottom, #8E24AA, #673AB7)",
  color: "white",
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
