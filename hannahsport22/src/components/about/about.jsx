import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Container className="text-container">
        <h1>Hello and welcome to my portfolio...</h1>
      </Container>

      <br></br>

      <Container fluid>
        <Row>
          <Col><h1>A little about me</h1>
          <p>My name is Hannah Allison-Batt,
          Aspiring full stack web developer entering the field through UWA's coding bootcamp. With a number of projects under my belt,  I'm interested in the application my knowledge to help bring not only accessablity but equity to various fields, especially healthcare.</p>
          </Col>
          <Col>picture of me</Col>
        </Row>
      </Container>
    </div>
  );
}