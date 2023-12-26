import React, { useState } from "react";
import { Box, FormGroup, FormLabel } from "@mui/material";
import { FormControlLabel, Checkbox, FormControl } from "@mui/material";

import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import { EventEmitter } from "stream";

export const MuiCheckBox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  console.log(acceptTnc);
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAcceptTnc(event.target.checked);

  const [skills, setSkills] = useState<string[]>([]);
  console.log(`current skill array:${skills}`);
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handlechange} />}
        />{" "}
      </Box>
      <Box>
        <Checkbox
          icon={<SatelliteAltIcon />}
          checkedIcon={<SatelliteAltIcon />}
          checked={acceptTnc}
          onChange={handlechange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="html"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="CSS"
              control={
                <Checkbox
                  checked={skills.includes("CSS")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JAVA"
              value="JAVA"
              control={
                <Checkbox
                  checked={skills.includes("JAVA")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="tntn"
              value="jl"
              control={
                <Checkbox
                  checked={skills.includes("jl")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
