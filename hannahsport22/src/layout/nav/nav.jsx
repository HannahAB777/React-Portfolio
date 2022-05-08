import React from "react";
import { Link } from "react-router-dom";
//import Button from "../../components/button/button";
import "./nav.css";


export default function Navbar(){
    const navItems=[
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "about"
        },
        {
            title: "Projects",
            link: "projects"
        },
        {
            title: "Contact",
            link: "contact"
        }
        
    ];
    return(
        <nav>
        <ul>{navItems.map((item, index) =>{
            return(
                
                <li>
                <Link key={index} to={item.link}>{item.title}</Link>
                </li>
            )
        })}
        
        </ul>
        </nav>
    )
}