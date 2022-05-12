import React from "react";
import css from "./containers.css";
import Card from "react-bootstrap/Card";
import marvelFan from "../images/marvel-fan-img.jpg";
import weatherApp from "../images/weather-app-img.png";


export default function ProjectCards(){
    const projects = [
        {
            title: "Marvel Fansite",
            img: marvelFan,
            description: "The purpose of this repository is to create an interactive website that allows the user to find movies to be able to watch featuring their chosen character. Currently featuring a large, but limited selection of characters across 4 Marvel groups, including X-Men, Avengers, Villains & Guardians of the Galaxy.",
            git: "https://github.com/HannahAB777/Marvel-Fan-Site",
            deployed: "https://hannahab777.github.io/Marvel-Fan-Site/"
        },
        {
            title: "Weather App",
            img: weatherApp ,
            description: "an App made with the use of the sever-side-API found at openweathermap.org/. You can search for and access weather data, from countries all over the world. with a current forecast and a future five day forecast.",
            git: "https://github.com/HannahAB777/weather-app",
            deployed: "https://hannahab777.github.io/weather-app/"
        },
        {
            title: "",
            img: "",
            description: "",
            git: "",
            deployed: ""
        },
        {
            title: "",
            img: "",
            description: "",
            git: "",
            deployed: ""
        },
        {
            title: "",
            img: "",
            description: "",
            git: "",
            deployed: ""
        },
        {
            title: "",
            img: "",
            description: "",
            git: "",
            deployed: ""
        },
    ]

    return(
        <div>
        projects
        <Card>
        <h1>{projects.title}</h1>
        <br/>
        <img src={projects.img}></img>
        <br/>
        <p>{projects.description}</p>
        <br/>
        <a herf={projects.git}>{projects.git}</a>
        <br/>
        <a href={projects.deployed}>{projects.deployed}</a>
        <br/>
        </Card>
        </div>
    )
}