import React, { useState } from "react";
import { Stack, Chip, Avatar } from "@mui/material";
import {
  Voicemail as VoicemailIcon,
  Face as FaceIcon,
} from "@mui/icons-material";

export const MuIChip = () => {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chipToDelete: String) =>
    setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  return (
    <Stack spacing={2} direction="row">
      <Chip label="Chip1" color="primary" />
      <Chip
        label="Chip outlined"
        color="primary"
        variant="outlined"
        size="small"
        icon={<FaceIcon />}
      />
      <Chip
        label="Chip outlined"
        color="primary"
        variant="filled"
        size="small"
        avatar={
          <Avatar>
            {" "}
            <VoicemailIcon />{" "}
          </Avatar>
        }
      ></Chip>
      <Chip label="click" color="success" onClick={() => alert("clicked")} />
      <Chip
        label="delete"
        color="error"
        onDelete={() => alert("Delete handler called")}
        onClick={() => alert("clicked")}
      />
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          color="success"
          onClick={() => alert("clicked")}
          onDelete={() => handleDelete(chip)}
        />
      ))}
    </Stack>
  );
};
