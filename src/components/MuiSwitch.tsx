import React, { useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            color="success"
            size="medium"
            icon={<SatelliteAltIcon />}
            checkedIcon={<DoubleArrowIcon />}
            checked={checked}
            onChange={handleSwitchChange}
          />
        }
      />
    </Box>
  );
};
