import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AdbIcon from "@mui/icons-material/Adb";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
            // variant="scrollable"
            // scrollButtons="auto"
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<AdbIcon />}
              iconPosition="start"
            ></Tab>
            <Tab label="Tab Two" value="2" disabled></Tab>
            <Tab label="Tab Three" value="3"></Tab>
          </TabList>
          <TabPanel value="1">Panel one </TabPanel>
          <TabPanel value="2">Panel two </TabPanel>
          <TabPanel value="3">Panel three </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};
