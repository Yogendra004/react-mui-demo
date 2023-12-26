import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  console.log(value, setValue);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="home"
        icon={<HomeIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Favourites"
        icon={<FavoriteIcon />}
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};
