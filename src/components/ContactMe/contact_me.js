import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import ThirdPageHome from "../Home/thirdHomePage";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_mcjtagf",
          "template_6h1q5sr",
          form.current,
          "5_BsM13xgwp8C3qwT"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            setDone(true);
          },
          (error) => {
            console.log(error.text);
            console.log("message not sent");
          }
        );
    }
  };

  return (
    <Container style={{ marginTop: "12rem" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="user"
              placeholder="Please Enter Your Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="user_email"
              className="user"
              placeholder="Please Enter Your Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Please Enetr Your Message for Me"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && "Please, fill all the input field"}
            </span>
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
            <span className="done">
              {done &&
                "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}
            </span>
          </form>
        </Col>
      </Row>
      <Row style={{ marginTop: "-8rem" }}>
        <ThirdPageHome />
      </Row>
    </Container>
  );
};

export default Contact;
