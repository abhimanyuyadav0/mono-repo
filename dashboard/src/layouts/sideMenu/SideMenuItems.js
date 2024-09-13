import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const management = [
  {
    id: "group-management",
    type: "group",
    title: "Management",
    url: "/dashboard",
    children: [
      {
        id: "about",
        title: "About",
        type: "item",
        url: "/dashboard/about",
        icon: <InfoIcon />,
      },
      {
        id: "contact",
        title: "Contact",
        type: "item",
        url: "/dashboard/contact",
        icon: <ContactMailIcon />,
      },
      {
        id: "colors",
        title: "Colors",
        type: "item",
        url: "/dashboard/colors",
        icon: <ContactMailIcon />,
      },
      {
        id: "user",
        title: "User",
        type: "item",
        url: "/dashboard/users",
        icon: <ContactMailIcon />,
      },
    ],
  },
];

const dashboard = [
  {
    id: "item-dashboard",
    type: "item",
    title: "Dashboard",
    url: "/dashboard",
    icon: <DashboardIcon />,
  },
];

const options = [
  {
    id: "options",
    type: "menu",
    title: "Options",
    url: "",
    children: [
      {
        id: "menu-about",
        title: "About",
        type: "item",
        url: "/dashboard/about",
        icon: <InfoIcon />,
      },
      {
        id: "menu-contact",
        title: "Contact",
        type: "item",
        url: "/dashboard/contact",
        icon: <ContactMailIcon />,
      },
    ],
  },
];

const sideMenuItems = [...dashboard, ...management, ...options];

export default sideMenuItems;
