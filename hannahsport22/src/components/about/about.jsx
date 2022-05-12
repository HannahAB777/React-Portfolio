import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import Selfie from "../../containers/selfieContainer";
import css from "./about.css";

export default function Home() {
  return (
    <div>



      <Container>
        <Row className="homelayout">
          <Col className="homelayout-col"><h1>A little about me</h1>
          <p>My name is Hannah Allison-Batt,
          Aspiring full stack web developer entering the field through UWA's coding bootcamp. With a number of projects under my belt,  I'm interested in the application my knowledge to help bring not only accessablity but equity to various fields, especially healthcare.</p>
          </Col>
          </Row>
        <Row className="homeMainRow"> 
          <Col>
          </Col>
          <Col className="imageCol" ><Selfie></Selfie></Col>
        </Row>
      </Container>
    </div>
  );
}