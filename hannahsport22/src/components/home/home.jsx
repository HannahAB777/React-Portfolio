import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import Selfie from "../../containers/selfieContainer";

export default function Home() {
  return (
    <div>
      <Container className="text-container">
        <h1>Hello and welcome to my portfolio...</h1>
      </Container>

      <br></br>

      <Container fluid>
        <Row>
          <Col>
          </Col>
          <Col><Selfie></Selfie></Col>
        </Row>
      </Container>
    </div>
  );
}
