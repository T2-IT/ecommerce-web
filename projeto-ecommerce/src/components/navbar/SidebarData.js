import React from "react";
import {RiHome2Line} from "react-icons/ri"
import {IoStorefrontOutline} from "react-icons/io5";
import {RiLoginCircleLine} from 'react-icons/ri';
import {VscAccount} from 'react-icons/vsc';

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <RiHome2Line />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <IoStorefrontOutline />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <RiLoginCircleLine />,
    cName: "nav-text",
  },
  {
    title: "Conta",
    path: "/conta",
    icon: <VscAccount/>,
    cName: "nav-text",
  },
];
