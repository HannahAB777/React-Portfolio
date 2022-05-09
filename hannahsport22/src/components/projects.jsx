import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';

export default function Projects(){
    return(
        <div>
        <Container className="text-container">
        <h1>Mentoripum Emporium</h1>
        <Row><img src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img></Row>
        <p></p>
      </Container>
      <br></br>
      <Container className="text-container">
      <Row>
      <Col>
      <h1>project1</h1>
      <img src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img>
      <p></p>
      </Col>
      <Col>
      <h1>project 2</h1>
      <img src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img>
      <p></p>
      </Col>
      <Col>
      <h1>project 3</h1>
      <img src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img>
      <p></p>
      </Col>
      </Row>
      </Container>
      <br></br>
      <Container className="text-container">
      <Row>
      <Col>
      <h1>project 4</h1>
      <img src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img>
      <p></p>
      </Col>
      <Col>
      <h1>project 5</h1>
      <img src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img>
      <p></p>
      </Col>
      <Col>
      <h1>project 6</h1>
      <img src ="../../public/images/mentorium-emporium" alt="view of mentorium imporium app"></img>
      <p></p>
      </Col>
      </Row>
      </Container>
      </div>
    )
}