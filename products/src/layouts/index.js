import React, { useEffect, useState } from "react";
import { Box, Divider, IconButton, Drawer as MuiDrawer } from "@mui/material";
import { Outlet } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideMenu from './sideMenu';
import Header from './header';
import useResponsive from "../utils/useResponsive";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Layout = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const { isXs, isSm, isMd, isLg } = useResponsive()

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  useEffect(() => {
    if (isXs) {
      setDrawerOpen(false)
    } else if (isSm) {
      setDrawerOpen(false)
    } else if (isMd) {
      setDrawerOpen(true)
    } else {
      setDrawerOpen(true)
    }
  }, [isSm, isXs, isMd, isLg]);

  return (
    <Box sx={{  }}>
      {/* <Header handleDrawerOpen={handleDrawerOpen} drawerOpen={drawerOpen} />
      <Drawer variant={"permanent"} open={drawerOpen}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} aria-label="Close drawer">
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <SideMenu drawerOpen={drawerOpen} />
        <Divider />
      </Drawer> */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
