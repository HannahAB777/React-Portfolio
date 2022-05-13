import React from "react";
import { Link } from "react-router-dom";
//import Button from "../../components/button/button";
import "./nav.css";

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      link: "/",
      index: 0
    },
    {
      title: "About",
      link: "/about",
      index:1
    },

    {
      title: "Projects",
      link: "projects",
      index:3
    },
    {
      title: "Contact",
      link: "/contact",
      index:4
    },
  ];
  return (
    <nav>
      <ul className="navbar">
        {navItems.map((item, index) => {
          return (
            <li className="navOptions navList" key={item.index}>
              <Link className="navList link" to={item.link}>
               {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
