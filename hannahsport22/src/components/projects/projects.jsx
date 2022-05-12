import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';
import mentoriumEmporium from '../../images/mentorium-emporium.png';
import ProjectCards from "../../containers/projectContainer";

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
      <Container>
      <Row className="cardRow">
      <ProjectCards></ProjectCards>
      </Row>
      </Container>
      </div>
    )
}