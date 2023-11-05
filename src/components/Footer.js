import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div
      style={{
        marginTop: "1.5rem",
        marginBottom: "2rem",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Lalit Kumar</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} SB</h3>
          </Col>
          <Col md="4" className="footer-body">
            <a
              href="https://github.com/lalit-kumar-20"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                style={{ display: "inline-block", marginRight: "1.5rem" }}
              />
            </a>
            <a
              href="https://www.facebook.com/lalitrajput.lalitrajput.716/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook
                style={{ display: "inline-block", marginRight: "1.5rem" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/lalit-lodhi-467677201/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                style={{ display: "inline-block", marginRight: "1.5rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com/lalitlodhi_official/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram
                style={{ display: "inline-block", marginRight: "1.5rem" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
