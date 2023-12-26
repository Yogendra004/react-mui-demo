import React from "react";
import { Badge, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="success">
        <EmailIcon />
      </Badge>
      <Badge badgeContent={0} color="error" showZero>
        <EmailIcon />
      </Badge>
      <Badge badgeContent={100} color="success" max={999}>
        <EmailIcon />
      </Badge>
      <Badge variant="dot" color="primary">
        <EmailIcon />
      </Badge>
    </Stack>
  );
};
