import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import { useState } from "react";

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  console.log(formats);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string[]
  ) => setFormats(updatedFormat);

  return (
    <Stack direction="column" spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://www.google.com/">
          {" "}
          Text
        </Button>
        <Button variant="contained">contained </Button>
        <Button variant="outlined">outlined </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary{" "}
        </Button>
        <Button variant="text" color="secondary">
          secondary{" "}
        </Button>
        <Button variant="contained" color="warning">
          warning{" "}
        </Button>
        <Button variant="outlined" color="info">
          info{" "}
        </Button>
        <Button variant="contained" color="success">
          success{" "}
        </Button>
        <Button variant="text" color="error">
          error{" "}
        </Button>
      </Stack>
      <Stack display="flex" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableElevation
          disableRipple
        >
          {" "}
          send
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => alert("clicked")}
        >
          {" "}
          send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon></SendIcon>
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical" size="small">
          <Button color="primary" onClick={() => alert("clicked")}>
            Left
          </Button>
          <Button color="success">Center </Button>
          <Button color="secondary">Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="xyz" aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
