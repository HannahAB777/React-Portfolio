import React from "react";
import PictureOfMe from "../images/pink-img.jpg";
import css from "./containers.css";

export default function Selfie(){
    return(
        <div>
        <img className="profile-image" src= {PictureOfMe}></img>
        </div>
    )
}