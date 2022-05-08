import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div>
      <container className="text-container">
        <h1>Hello and welcome to my portfolio...</h1>
      </container>

      <br></br>

      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
}
