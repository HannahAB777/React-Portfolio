import React from "react";
import { Link } from "react-router-dom";
//import Button from "../../components/button/button";
import "./nav.css";

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },

    {
      title: "Projects",
      link: "projects",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ];
  return (
    <nav>
      <ul>
        {navItems.map((item) => {
          return (
            <li key={item.index}>
              <Link className="link" to={item.link } key={item.index}>
               {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
