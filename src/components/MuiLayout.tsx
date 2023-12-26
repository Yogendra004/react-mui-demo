import React from "react";
import {
  Box,
  Stack,
  Divider,
  Grid,
  Paper,
  Card,
  IconButton,
  colors,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "50px" }} elevation={6}>
      <Stack
        direction="row"
        gap={2}
        border="2px solid black"
        display="flex"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "24px",
            borderRadius: "20px",
            padding: "10px",
            margin: "20px 40px",
          }}
        >
          Happy New Year 2024
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="20px"
          color="white"
          width="100px"
          height="100px"
          borderRadius="20px"
          bgcolor="secondary.light"
        >
          {" "}
          Bye Bye 2023
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={2} textAlign="left">
        <Grid item xs={6}>
          <Box
            bgcolor="primary.light"
            p={2}
            textAlign="center"
            borderRadius="20px"
          >
            <IconButton onClick={() => alert("hello words")}>
              <DoubleArrowIcon sx={{ bgcolor: "primary", color: "white" }} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            {" "}
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            {" "}
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            {" "}
            Item 1
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
