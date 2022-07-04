import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Selfie from "../../containers/selfieContainer";
import css from "./about.css";

export default function Home() {
  return (
    <div className="about-me-background">
      <Container>
        <Row className="">
          <Col className="about-me-p">
            <h1>A little about me</h1>
            <p className="about-me">
              "I am a full stack web developer with a strong interest in backend development and cybersecurity, who is a good communicator, versatile and motivated to learn.  I believe technology is a powerful and creative tool that can be used to improve business performance, participation, equity and quality of life in many different fields. "
            </p>
          </Col>
        </Row>
        <Row className="homeMainRow">
          <Col></Col>
          <Col className="imageCol">
            <Selfie></Selfie>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
