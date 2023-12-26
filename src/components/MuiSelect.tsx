import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

import React from "react";

export const MuiSelect = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as string);
    console.log(event);
  };
  const [countries, setCountries] = useState<string[]>([]);
  const handleCountriesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="350px" mb={4}>
      <TextField
        variant="outlined"
        label="Select country"
        value={value}
        onChange={handleChange}
        select
        fullWidth
      >
        <MenuItem value="IN"> India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AUS"> Australia</MenuItem>
      </TextField>
      <TextField
        variant="outlined"
        fullWidth
        label="Select Foods"
        select
        value={countries}
        onChange={handleCountriesChange}
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="CKN"> Chicken</MenuItem>
        <MenuItem value="FRT"> Fruits</MenuItem>
        <MenuItem value="DRNK"> Drinks</MenuItem>
        <MenuItem value="VEG"> Vegetables</MenuItem>
      </TextField>
    </Box>
  );
};
