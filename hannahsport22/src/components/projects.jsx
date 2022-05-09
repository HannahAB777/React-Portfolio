import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Projects(){
    return(
        <div>
        <Container className="text-container">
        <h1>Mentoripum Emporium</h1>
        <Row><image src ="../../public/images/mentorium-emporium"></image></Row>
        <p></p>
      </Container>
      <br></br>
      <Container>
      <row>
      <Col xs={4} md={2}>
      <h1>project1</h1>
      <image></image>
      <p></p>
      </Col>
      <Col xs={4} md={2}>
      <h1>project 2</h1>
      <image></image>
      <p></p>
      </Col>
      <Col xs={4} md={2}>
      <h1>project 3</h1>
      <image></image>
      <p></p>
      </Col>
      </row>
      </Container>
      <br></br>
      <Container>
      <row>
      <Col xs={4} md={2}>
      <h1>project 4</h1>
      <image></image>
      <p></p>
      </Col>
      <Col xs={4} md={2}>
      <h1>project 5</h1>
      <image></image>
      <p></p>
      </Col>
      <Col xs={4} md={2}>
      <h1>project 6</h1>
      <image></image>
      <p></p>
      </Col>
      </row>
      </Container>
      </div>
    )
}