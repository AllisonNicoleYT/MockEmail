import React from "react";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Inbox",
    icon: <FaIcons.FaInbox />,
    path: "/",
    cName: "nav-text",
  },
  {
    title: "Compose email",
    icon: <FaIcons.FaRegPlusSquare />,
    path: "/compose-email",
    cName: "nav-text",
  },
  {
    title: "About Us",
    icon: <FaIcons.FaUser />,
    path: "/about-us",
    cName: "nav-text",
  },
];
