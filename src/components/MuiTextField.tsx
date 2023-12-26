import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import React, { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          size="small"
          color="secondary"
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          size="small"
          color="secondary"
          label="input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share your password"}
        ></TextField>
        <TextField
          variant="outlined"
          size="small"
          color="secondary"
          label="input"
          helperText="Do not share your password"
        ></TextField>
        <TextField
          variant="outlined"
          type="password"
          size="small"
          color="secondary"
          label="Password"
          helperText="Do not share your password"
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={4}>
        <TextField
          label="weight"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
        <TextField
          label="amount"
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
        />
        <TextField
          variant="outlined"
          label="Password"
          required
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => alert("show password")}>
                  <RemoveRedEyeIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
