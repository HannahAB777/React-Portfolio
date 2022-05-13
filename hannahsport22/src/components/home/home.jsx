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
        
          <Col className="imageCol" ><Selfie></Selfie>
        
          </Col>
          <Col className="titleCol">
          <h2 className="name-title">Hannah Allison-Batt</h2>
          <br/>
          <h1 className="second-title">Junior Developer Portfolio</h1>
      
          </Col>
          
        
      </Container>
    </div>
  );
}
