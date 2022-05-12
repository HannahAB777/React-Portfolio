import React from "react";
import Navbar from "./nav/nav";
import css from "./layout.css";

export default function MainLayout(props){
    return(
        <div>
        <Navbar></Navbar>
        {props.children}
        {/*footer */}
        </div>
    )
}