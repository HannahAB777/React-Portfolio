import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';
import mentoriumEmporium from '../images/mentorium-emporium.png';
import employeeDatabase from '../images/employee-database-img.png';
import weatherApp from '../images/weather-app-img.png';
import JATE from '../images/JATE-img.png';

export default function Projects(){
    return(
        <div>
        <Container className="text-container">
        <h1>Mentoripum Emporium</h1>
        <Row><img src ={mentoriumEmporium} alt="view of mentorium imporium app"></img></Row>
        <p>"Mentorium Emporium has been developed to connect aspiring developers with experienced developers through our mentoring programme. 
        Our program focuses on the strengths of the Mentors based on coding languages and matches the Mentees based on their selected languages requiring development. 
        Mentees are presented with their Mentor matches and can select a mentor to view their availability to request an appointment. 
        Mentors can then approve the mentee appointment request. The appointments are then presented on the user’s profile."</p>
        <a href="https://github.com/HannahAB777/Project-2-Winners">Github repository: https://github.com/HannahAB777/Project-2-Winners</a>
        <br></br>
        <a href="https://mentorium-emporium.herokuapp.com/"> Deployed application: https://mentorium-emporium.herokuapp.com/</a>
      </Container>
      <br></br>
      <Container className="text-container">
      <Row>
      <Col>
      <h1 className="secondary-projects-title">Inquirer prompted employee database</h1>
      <img className="secondary-projects" src={employeeDatabase} alt="view of mentorium imporium app"></img>
      <p>"Following the prompts from your intergrated terminal you can enter new employees, there details and position in the company. 
      made with the use of node.js, after answering all questions on employees an html file is created storing the data."</p>
      <a href="https://github.com/HannahAB777/Employee_database">Github repository: https://github.com/HannahAB777/Employee_database</a>
      <br></br>
      </Col>
      <Col>
      <h1 className="secondary-projects-title">API Weather forecast</h1>
      <img className="secondary-projects" src ={weatherApp} alt="view of mentorium imporium app"></img>
      <p>"Made with the use of the sever-side-API found at "https://openweathermap.org/". You can search for and access weather data, from countries all over the world. with a current forecast and a future five day forecast.
     Made with the use of HTML, CSS, JAVASCRIPT, MONOMENT.JS and BOOTSTRAP."</p>
      <a href="https://github.com/HannahAB777/weather-app">Github repository: https://github.com/HannahAB777/weather-app</a>
      <br></br>
      <a href="https://hannahab777.github.io/weather-app/"> Deployed application: https://hannahab777.github.io/weather-app/</a>
      </Col>
      <Col>
      <h1 className="secondary-projects-title">PWA Text editor</h1>
      <img className="secondary-projects" src ={JATE} alt="view of mentorium imporium app"></img>
      <p>"A progresive web aplication for editing and storing text, that can be installed and run offline."</p>
      <a href="https://github.com/HannahAB777/Text-editor">Github repository: https://github.com/HannahAB777/Text-editor</a>
      <br></br>
      <a href="https://hannahs-pwa-note-taker.herokuapp.com/"> Deployed application: https://hannahs-pwa-note-taker.herokuapp.com/</a>
      </Col>
      </Row>
      </Container>
      <br></br>
      <Container className="text-container">
      <Row>
      <Col>
      <h1 className="secondary-projects-title">project 4</h1>
      <img className="secondary-projects" src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img>
      <p></p>
      </Col>
      <Col>
      <h1 className="secondary-projects-title">project 5</h1>
      <img className="secondary-projects" src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img>
      <p></p>
      </Col>
      <Col>
      <h1 className="secondary-projects-title">project 6</h1>
      <img className="secondary-projects" src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img>
      <p></p>
      </Col>
      </Row>
      </Container>
      </div>
    )
}