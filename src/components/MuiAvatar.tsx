import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.main" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.main" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup>
          <Avatar sx={{ bgcolor: "primary.main" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.main" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="jane doe"
          />
          <Avatar src="../images/Mypic.jpg" alt="doe" />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
