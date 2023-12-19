import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import style from "./Home.style";

const ThirdPageHome = () => {
  return (
    <Container
      style={style.SPMainContainerStyle}
      fluid
      className="home-about-section"
      id="about"
    >
      <Container style={{ marginTop: "-7rem" }}>
        <Row>
          <Col
            style={style.SPConnectColStyle}
            md={12}
            className="home-about-social"
          >
            <h1 style={style.SPConnect1Style}>FIND ME ON</h1>
            <br />
            <p style={style.SPConnect2Style}>
              Feel free to{" "}
              <span style={style.SPRow1Col1H1SpanStyle}>connect </span>
              with me
            </p>
            <div style={style.SPDivStyle} className="home-about-social-links">
              <a
                href="https://github.com/lalit-kumar-20"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub style={style.SPIconStyle} />
              </a>

              <a
                href="https://www.facebook.com/lalitrajput.lalitrajput.716/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillFacebook style={style.SPIconStyle} />
              </a>

              <a
                href="https://www.linkedin.com/in/lalit-lodhi-467677201/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn style={style.SPIconStyle} />
              </a>
              <a
                href="https://www.instagram.com/lalitlodhi_official/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram style={style.SPIconStyle} />
              </a>
              <a
                href="https://medium.com/@lalit007lodhi"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaMediumM style={style.SPIconStyle} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ThirdPageHome;
