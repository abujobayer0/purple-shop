import { Container, styled } from "@mui/material";
import React from "react";

const LoaderContainer = styled(Container)(() => ({
  display: "flex",
  width: 1,
  justifyContent: "center",
  padding: 10,
}));

const Loader = () => {
  return (
    <LoaderContainer>
      <span class="loader"></span>;
    </LoaderContainer>
  );
};

export default Loader;
