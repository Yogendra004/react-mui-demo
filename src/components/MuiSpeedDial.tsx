import React from "react";

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import {
  ContentCopy as ContentCopyIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  Edit as EditIcon,
} from "@mui/icons-material";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="Copy"
        onClick={() => alert("hello")}
      ></SpeedDialAction>
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
      ></SpeedDialAction>
      <SpeedDialAction
        icon={<ShareIcon />}
        tooltipTitle="Share"
      ></SpeedDialAction>
    </SpeedDial>
  );
};
