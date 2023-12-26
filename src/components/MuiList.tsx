import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "white" }}>
      <List>
        <ListItemButton>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List item 1 "
              secondary="seconday text"
            ></ListItemText>
          </ListItem>
        </ListItemButton>
      </List>
      <Divider></Divider>
      <List>
        <ListItemButton>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List item 2 "
              secondary="seconday text"
            ></ListItemText>
          </ListItem>
        </ListItemButton>
      </List>
      <Divider></Divider>
      <List>
        <ListItemButton>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List item 3 "
              secondary="seconday text"
            ></ListItemText>
          </ListItem>
        </ListItemButton>
      </List>
    </Box>
  );
};
