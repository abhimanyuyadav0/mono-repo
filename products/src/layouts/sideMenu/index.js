import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Menu,
  Typography,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"; // Import missing icon
import sideMenuItems from "./SideMenuItems";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
  paddingLeft: 2,
  minWidth: 30,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem", }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const renderMenuItems = (
  items,
  drawerOpen,
  expanded,
  handleChange,
  handleClick,
  anchorEl,
  handleClose,
  activeLink
) => {
  return items.map((item) => {
    if (item.type === "group") {
      return (
        <React.Fragment key={item.id}>
          {drawerOpen && (
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 30,
                  justifyContent: drawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemText primary={item.title} sx={{ opacity: drawerOpen ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          )}
          {item.children && (
            <List component="div" disablePadding>
              {renderMenuItems(item.children, drawerOpen, expanded, handleChange, handleClick, anchorEl, handleClose, activeLink)}
            </List>
          )}
        </React.Fragment>
      );
    }

    if (item.type === "menu") {
      return drawerOpen ? (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
            <Typography sx={{ml:2.9}}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.children && (
              <List component="div">
                {renderMenuItems(item.children, drawerOpen, expanded, handleChange, handleClick, anchorEl, handleClose, activeLink)}
              </List>
            )}
          </AccordionDetails>
        </Accordion>
      ) : (
        <div key={item.id}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleClick}
              sx={{
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
                "&.active": {
                  backgroundColor: "rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                <MoreHorizIcon />
              </ListItemIcon>
              {drawerOpen && (
                <ListItemText primary={item.title} sx={{ opacity: drawerOpen ? 1 : 0 }} />
              )}
            </ListItemButton>
          </ListItem>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {item?.children?.map((child) => (
              <MenuItem component={NavLink}
                to={child.url} // Corrected URL usage
                sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                key={child.title}
                onClick={handleClose}
                disableRipple>
                {child.icon}
                {child.title}
              </MenuItem>
            ))}
          </Menu>
        </div>
      );
    }

    if (item.type === "item") {
      return (
        <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={NavLink}
            to={item.url}
            sx={{
              minHeight: 48,
              justifyContent: drawerOpen ? "initial" : "center",
              px: 2.5,
              "&.active": {
                backgroundColor: activeLink === item.url ? "rgba(0, 0, 0, 0.08)" : "transparent",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: drawerOpen ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: drawerOpen ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      );
    }

    return null;
  });
};

const SideMenu = ({ drawerOpen }) => {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation(); // Use this hook to get the current route
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname); // Update activeLink when the route changes
  }, [location]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <List>
      {renderMenuItems(sideMenuItems, drawerOpen, expanded, handleChange, handleClick, anchorEl, handleClose, activeLink)}
    </List>
  );
};

export default SideMenu;
