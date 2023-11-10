import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import style from "./Footer.style";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div style={style.FooterDivStyle}>
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub style={style.FooterIconAlignmentStyle} />
            </a>
            <a
              href="https://www.facebook.com/lalitrajput.lalitrajput.716/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook style={style.FooterIconAlignmentStyle} />
            </a>

            <a
              href="https://www.linkedin.com/in/lalit-lodhi-467677201/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn style={style.FooterIconAlignmentStyle} />
            </a>
            <a
              href="https://www.instagram.com/lalitlodhi_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram style={style.FooterIconAlignmentStyle} />
            </a>
            <a
              href="https://medium.com/@lalit007lodhi"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaMediumM style={style.FooterIconAlignmentStyle} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
