import React from "react";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

export const MuiTimeLine = () => {
  return (
    <Timeline /*position="alternate"*/>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined"></TimelineDot>
          <TimelineConnector></TimelineConnector>
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined"></TimelineDot>
          <TimelineConnector></TimelineConnector>
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined"></TimelineDot>
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
