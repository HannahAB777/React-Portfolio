import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import employeeDatabase from "../images/employee-database-img.png";
import weatherApp from "../images/weather-app-img.png";
import JATE from "../images/JATE-img.png";
import css from "./containers.css";

export default function ProjectCards() {
  const projects = [
    {
      title: "Inquirer prompted employee database",
      img: employeeDatabase,
      description:
        "Following the prompts from your intergrated terminal you can enter new employees, there details and position in the company. made with the use of node.js, after answering all questions on employees an html file is created storing the data.",
      repo: "https://github.com/HannahAB777/Employee_database",
      deployed: "",
    },
    {
      title: "API Weather forecast",
      img: weatherApp,
      description:
        "Made with the use of the sever-side-API found at openweathermap.org. You can search for and access weather data, from countries all over the world. with a current forecast and a future five day forecast. Made with the use of HTML, CSS, JAVASCRIPT, MONOMENT.JS and BOOTSTRAP.",
      repo: "https://github.com/HannahAB777/weather-app",
      deployed: "https://hannahab777.github.io/weather-app/",
    },
    {
      title: "PWA Text editor",
      img: JATE,
      description:
        "A progresive web aplication for editing and storing text, that can be installed and run offline.",
      repo: "https://github.com/HannahAB777/Text-editor",
      deployed: "https://hannahs-pwa-note-taker.herokuapp.com/",
    },
  ];

  const projects2 = [
    {
      title: "",
      img: "",
      description: "",
      repo: "",
      deployed: "",
    },
    {
      title: "",
      img: "",
      description: "",
      repo: "",
      deployed: "",
    },
    {
      title: "",
      img: "",
      description: "",
      repo: "",
      deployed: "",
    },
  ];
  return (
    <Container>
      <Row>
        {projects.map((project) => {
          return (
            <Col>
              <Card className="Card">
                <h1 className="secondary-projects-title" key={project.index}>
                  {project.title}
                </h1>
                <img
                  className="secondary-projects"
                  key={project.index}
                  src={project.img}
                  alt={project.img}
                ></img>
                <p key={project.index}>"{project.description}"</p>
                <p key={project.index}>
                  Github repository:
                  <a key={project.index} href={project.repo}> {project.repo}</a>
                  
                </p>
                <p key={project.index}>
                  Deployed project:
                  <a key={project.index} href={project.deployed}>
                    {project.deployed}
                  </a>
                </p>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>
          <Card>
            <h1 className="secondary-projects-title">{projects2.title}</h1>
            <img
              className="secondary-projects"
              src={projects2.img}
              alt={projects2.img}
            ></img>
            <p>"{projects2.description}"</p>
            <p>
              {" "}
              Github repository: <a href={projects2.repo}></a>
              {projects2.repo}
            </p>
            <p>
              {" "}
              Deployed project:{" "}
              <a href={projects2.deployed}>{projects2.deployed}</a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
