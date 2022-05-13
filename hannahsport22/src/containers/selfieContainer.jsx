import React from "react";
import PictureOfMe from "../images/profile-icon.jpg";
import css from "./containers.css";

export default function Selfie(){
    return(
        <div className="selfie-container">
        <img className="profile-image" src= {PictureOfMe}></img>
        </div>
    )
}