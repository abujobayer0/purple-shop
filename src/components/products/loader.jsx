import { Box, Container, Grid, Skeleton, styled } from "@mui/material";
import React from "react";

const LoaderContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
}));

const RectangularSkeleton = styled(Skeleton)({
  width: "100%",
  height: 340,
});

const TextSkeleton = styled(Skeleton)({
  fontSize: "1rem",
});

const SkeletonWrapper = styled(Box)({
  width: "100%",
});

const Loader = () => {
  return (
    <LoaderContainer>
      <Grid container justifyContent={"center"} spacing={2}>
        {[1, 2, 3].map((key) => (
          <Grid item key={key} xs={6} lg={4}>
            <SkeletonWrapper>
              <RectangularSkeleton variant="rectangular" />
              <TextSkeleton variant="text" />
              <TextSkeleton variant="text" />
            </SkeletonWrapper>
          </Grid>
        ))}
      </Grid>
    </LoaderContainer>
  );
};

export default Loader;
