import React from "react";
import { Stack, Link } from "@mui/material";
export const MuiLink = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      m={4}
      width="100%"
      justifyContent="flex-start"
    >
      <Link href="#" color="primary" variant="h6">
        Back to Jobs
      </Link>
      <Link
        href="https://mui.com/material-ui/material-icons/?query=down&selected=KeyboardArrowDown"
        color="primary"
        variant="h6"
        underline="hover"
      >
        Back to Home
      </Link>
    </Stack>
  );
};
