import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  SpeedDialIcon,
} from "@mui/material";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import { useState } from "react";

export const MuiRadioButton = () => {
  const CustomRadio = styled(Radio)`
    color: #2196f3;
    &.Mui-checked {
      color: red;
    }
  `;
  const [value, setValue] = useState("");
  console.log(value);
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return (
    <Box
      width={350}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap={5}
    >
      <FormControl>
        <FormLabel id="girlfriends-count-label">
          Number of girlfriends
        </FormLabel>
        <RadioGroup
          name="girlfriends-count"
          aria-labelledby="girlfriends-count-label"
          value={value}
          onChange={handlechange}
        >
          <FormControlLabel
            control={<Radio />}
            label="less than 3"
            value="less than 3"
          />
          <FormControlLabel
            control={<Radio />}
            label="less than 5 and more than 3"
            value="less than 5 and more than 3"
          />
          <FormControlLabel
            control={<Radio />}
            label="less than 10"
            value="less than 10"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          {" "}
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
        >
          <FormControlLabel
            control={
              <CustomRadio
                icon={<SpeedDialIcon />}
                checkedIcon={<SatelliteAltIcon />}
              />
            }
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<CustomRadio />} label="3-5" value="3-5" />
          <FormControlLabel
            control={<CustomRadio />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
