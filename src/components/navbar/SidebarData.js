import React from "react";
import {RiHome2Line} from "react-icons/ri"
import {IoStorefrontOutline} from "react-icons/io5";
import {AiOutlineLogin} from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <RiHome2Line />,
    cName: "nav-text",
  },
  {
    title: "Produtos",
    path: "/produtos",
    icon: <IoStorefrontOutline />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/",
    icon: <AiOutlineLogin />,
    cName: "nav-text",
  }
];
