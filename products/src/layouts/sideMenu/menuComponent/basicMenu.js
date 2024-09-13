import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

function BasicMenu({ items, open }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl); // Retitle internal state variable
  console.log(items);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {items.map((item) => (
        <div>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleClick}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&.active": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <MoreHorizIcon />
              </ListItemIcon>
              {open&&<ListItemText
                primary={item.title}
                sx={{ opacity: open ? 1 : 0 }}
              />}
            </ListItemButton>
          </ListItem>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {item.children.map((child) => (
              <MenuItem key={child.title} onClick={handleClose} disableRipple>
                {child.icon}
                {child.title}
              </MenuItem>
            ))}
          </Menu>
        </div>
      ))}
    </div>
  );
}

export default BasicMenu;
