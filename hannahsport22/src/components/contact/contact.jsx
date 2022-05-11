import React  from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
//npimport css from "./contact.css";
import emailjs from 'emailjs-com';

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
    <Container className="align-items-center contact-container">
      <Row>
        <Col>
          <strong>email</strong>
          <br />
          <strong> linkden</strong>
          <br />
          <strong> email</strong>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form className="contact_form w-100" onSubmit={submitRequest}>
            <Row>
              <Col lg="6" className="form-group rounded-0">
                <input
                  className="form-control"
                  id="name"
                  name= "name"
                  placeholder="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col lg="6" className="form-group rounded-0">
                <input
                  className="form-control"
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
              className="form-control rounded-0"
              name="message"
              type="text"
              placeholder="Tell us your purpose"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
              rows="5"
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="sumbit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
