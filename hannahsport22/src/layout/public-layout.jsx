import React from "react";
import Navbar from "./nav/nav";

export default function MainLayout(props){
    return(
        <div>
        <Navbar></Navbar>
        {props.children}
        {/*footer */}
        </div>
    )
}