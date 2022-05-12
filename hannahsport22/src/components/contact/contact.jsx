import React  from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./contact.css";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { library} from '@fortawesome/fontawesome-svg-core'
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import resume from "../../pdf/resume.pdf";
library.add(faFilePdf);

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({ email, message, name });

    emailjs.sendForm("service_htsdhk7", "template_9ke63bf", e.target, "NWjq-n3njb60ugI1n").then(res =>{
        console.log(res);
    }).catch(console.error());

    setName("");
    setEmail("");
    setMessage("");
   
  };
  return (
    <Container className="align-items-center contactContainer">
    <Row>
      <Row>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact_form w-100" onSubmit={submitRequest}>
            <Row>
              <Col lg="6" className="form-group rounded-0 formText">
                <input
                  className="form-control formBox"
                  id="name"
                  name= "name"
                  placeholder="Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col lg="6" className="form-group rounded-0 formText">
                <input
                  className="form-control formBox"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </Col>
            </Row>
  
            <textarea
              className="form-control formBox formText"
              name="message"
              type="text"
              placeholder="Type your message here..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
              rows="5"
            ></textarea>
  
            
              <Col lg="12" className="form-group">
                <button className="btn formText" type="sumbit">
                  Send
                </button>
              </Col>
            
          </form>
        </Col>
      </Row>
      <Row className="socialIconRow">
      
      <strong> <a href= "www.linkedin.com/in/hannah-emily-allison-batt"><FontAwesomeIcon  icon={faLinkedin} size="2x" className="contactIcons"/></a></strong>
      
      <strong> <a href= "https://github.com/HannahAB777"><FontAwesomeIcon icon={faGithub} size="2x" className="contactIcons"/></a></strong>
  
    
      <strong> <a href= {resume} download><FontAwesomeIcon  icon={faFilePdf} size="2x" className="contactIcons"/></a></strong>
  
      </Row>
      </Row>
    </Container>
  );
}
