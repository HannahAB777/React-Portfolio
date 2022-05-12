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
      link: "/contact",
    },
  ];
  return (
    <nav>
      <ul>
        {[navItems[0], navItems[1], navItems[2], navItems[3]].map((item) => {
          return (
            <li key={item}>
              <Link className="link" to={item.link}>
               {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
