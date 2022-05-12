import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import Selfie from "../../containers/selfieContainer";

export default function Home() {
  return (
    <div className="homeMain">

      <Container fluid>
        <Row className="homeMainRow"> 
          <Col>
          </Col>
          <Col className="imageCol" ><Selfie></Selfie></Col>
        </Row>
      </Container>
    </div>
  );
}
