import React from "react";
import css from "./containers.css";
import Card from "react-bootstrap/Card";
import marvelFan from "../images/marvel-fan-img.jpg";
import weatherApp from "../images/weather-app-img.png";
import quiz from "../images/quiz-img.png";
import EmployeeDatabase from "../images/employee-database-img.png";
import JATE from "../images/JATE-img.png";


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
            title: "Coding Quiz",
            img: quiz,
            description: "A timed coding quiz built with HTML, CSS, and JAVASCRIPT with highscores scored in local stoarge. Built to test your coding knowledge. when an anwser is incorrect 10 seconds will be deducted.",
            git: "https://github.com/HannahAB777/coding-quiz",
            deployed: "https://hannahab777.github.io/coding-quiz/"
        },
        {
            title: "Employee Database",
            img: EmployeeDatabase,
            description: "An employee register creator, following the prompts from your intergrated terminal you can enter new employees, there details and position in the company. made with the use of node.js, after answering all questions on employees an html file is created storing the data.",
            git: "https://github.com/HannahAB777/Employee_database",
            deployed: ""
        },
        {
            title: "Text Editor",
            img: JATE,
            description: "A progresive web aplication for editing and storing text, that can be installed and run offline.",
            git: "https://github.com/HannahAB777/Text-editor",
            deployed: "https://hannahs-pwa-note-taker.herokuapp.com/"
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