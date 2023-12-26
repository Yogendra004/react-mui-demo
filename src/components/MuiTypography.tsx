import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        repellat assumenda nobis quas tenetur sapiente ipsa eum ullam ad.
        Similique, itaque. Assumenda nobis inventore odit quae, sed illo
        accusantium natus.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At harum,
        repellendus facere enim error praesentium culpa eum accusantium
        laudantium nobis cupiditate aliquam quisquam. Explicabo optio, nostrum
        aliquid magni sint tempore.
      </Typography>
    </div>
  );
};
