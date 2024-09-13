import React, { useState } from "react";
import { Box, IconButton, keyframes, Menu, MenuItem, useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useThemeContext } from "./";

// Define rotation animation
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ThemeSettingsButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { toggleTheme } = useThemeContext();
  const open = Boolean(anchorEl);
  const theme = useTheme(); 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (themeName) => {
    localStorage.setItem(process.env.APP_NAME,themeName)
    if (themeName) toggleTheme(themeName);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          position: "fixed",
          top: 120, 
          right: 0, 
          zIndex: 1000,
          backgroundColor: theme.palette.background.paper, 
          boxShadow: theme.shadows[3], 
          animation: `${rotate} 2s linear infinite`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover, 
          },
        }}
      >
        <SettingsIcon sx={{ color: theme.palette.text.primary }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper, 
            color: theme.palette.text.primary, 
          },
        }}
      >
        <MenuItem onClick={() => handleClose("light")}>Light Theme</MenuItem>
        <MenuItem onClick={() => handleClose("dark")}>Dark Theme</MenuItem>
        <MenuItem onClick={() => handleClose("ocean")}>Ocean Theme</MenuItem>
        <MenuItem onClick={() => handleClose("golden")}>Golden Theme</MenuItem>
        <MenuItem onClick={() => handleClose("rainbow")}>Rainbow Theme</MenuItem>
      </Menu>
    </>
  );
};

export default ThemeSettingsButton;
