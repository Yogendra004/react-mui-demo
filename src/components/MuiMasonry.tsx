import React from "react";
import { Box, Paper } from "@mui/material";
import { Masonry } from "@mui/lab";

const heights = [150, 30, 90, 70, 150];
export const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height,
              border: "1px solid",
              gridColumn: `span 1`,
            }}
          >
            {index + 1}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};
