import React from "react";
import { Box, Link, Breadcrumbs, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const MuiBreadcrumbs = () => {
  const linkStyle = {
    cursor: "pointer", // Set the cursor to pointer on hover
    textDecoration: "none", // Remove default underline
    color: "inherit", // Inher
  };
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<ChevronRightIcon />}
        style={linkStyle}
      >
        <Link underline="hover">Home</Link>
        <Link underline="hover">Catalog</Link>
        <Link underline="hover">Accessories</Link>
        <Typography variant="body2" style={{ cursor: "default" }}>
          Shoes
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};
