import React from "react";
import Rating from "@mui/material/Rating";
import { Grid } from "@mui/material";

const Rate = ({ value }) => (
  <Grid container spacing={5} alignItems={"center"}>
    <Grid item>Rate </Grid>
    <Grid item>
      <Rating precision={0.1} value={value} readOnly />
    </Grid>
  </Grid>
);

export default Rate;
