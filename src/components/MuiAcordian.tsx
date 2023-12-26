import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const MuiAcordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) =>
    setExpanded(isExpanded ? panel : false);
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => {
          handleChange(isExpanded, "panel1");
          console.log(event, isExpanded);
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            fugit nemo, provident nostrum totam nulla labore rem facilis
            voluptate soluta corporis, quisquam vel placeat doloremque. Dolore,
            sit placeat! Eveniet, suscipit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => {
          handleChange(isExpanded, "panel2");
          console.log(isExpanded);
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            fugit nemo, provident nostrum totam nulla labore rem facilis
            voluptate soluta corporis, quisquam vel placeat doloremque. Dolore,
            sit placeat! Eveniet, suscipit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            fugit nemo, provident nostrum totam nulla labore rem facilis
            voluptate soluta corporis, quisquam vel placeat doloremque. Dolore,
            sit placeat! Eveniet, suscipit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
