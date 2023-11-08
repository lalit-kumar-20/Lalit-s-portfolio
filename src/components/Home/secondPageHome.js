import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileIcon from "../../Assests/ProfileIcon .png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const secondPageHome = () => {
  return (
    <Container
      style={{ marginTop: "13rem", color: "white" }}
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1
              style={{
                marginLeft: "4rem",
                color: "white",
                fontSize: "2.4em",
                fontFamily: "cursive",
              }}
              className="heading-name"
            >
              LET ME
              <strong style={{ color: "#4DD0E1" }} className="main-name">
                {" "}
                INTRODUCE{" "}
              </strong>
              MYSELF
            </h1>
            <p
              style={{
                marginTop: "3rem",
                color: "white",
                fontSize: "1.4rem",
                fontFamily: "system-ui",
              }}
              className="home-about-body"
            >
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <div style={{ marginTop: "0.8rem" }}>
                I am fluent in Language like
                <i>
                  <b style={{ color: "#4DD0E1", marginTop: "2rem" }}>
                    {" "}
                    C++, Javascript{" "}
                  </b>{" "}
                  and{" "}
                  <b style={{ color: "#4DD0E1", marginTop: "2rem" }}>
                    {" "}
                    TypeScript.{" "}
                  </b>
                </i>
              </div>
              <div style={{ marginTop: "0.8rem" }}>
                My field of Interest's are building new &nbsp;
                <i>
                  <b style={{ color: "#4DD0E1" }}>
                    Web Technologies
                  </b>{" "}
                  and <b style={{ color: "#4DD0E1" }}>Products </b>
                  {/* and
                  also in areas related to{" "}
                  <b className="purple">
                    Blockchain.
                  </b> */}
                </i>
              </div>
              <br />
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <b style={{ color: "#4DD0E1" }}>
                Node.js
              </b>{" "}
              and
              <i>
                <b style={{ color: "#4DD0E1" }}>
                  {" "}
                  Modern Javascript Library{" "}
                </b>
                and
                <b style={{ color: "#4DD0E1" }}> Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b style={{ color: "#4DD0E1" }}> React.js </b>
                and
                <b style={{ color: "#4DD0E1" }}> Next.js</b>
              </i>
              <br />
              <a style={{ fontSize: "1.6rem", color: "#ff33cc" }} href="http://localhost:3000/about">
                Know more...
              </a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                style={{
                  alignItems: "center",
                  display: "flex",
                  borderRadius: "5rem",
                  width: "15rem",
                  height: "15rem",
                  marginLeft: "7rem",
                  marginTop: "3rem",
                }}
                src={ProfileIcon}
                className="img-fluid logo "
                alt="brand"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            style={{ textAlign: "center", marginTop: "2rem" }}
            md={12}
            className="home-about-social"
          >
            <h1 style={{ fontSize: "2.4em", fontFamily: "cursive" }}>
              FIND ME ON
            </h1>
            <br />
            <p style={{ fontSize: "1.2em", fontFamily: "system-ui" }}>
              Feel free to <span style={{ color: "#4DD0E1" }}>connect </span>
              with me
            </p>
            <div
              style={{
                alignItems: "center",
                display: "inline-block",
                fontSize: "3.1rem",
              }}
              className="home-about-social-links"
            >
              <a
                href="https://github.com/lalit-kumar-20"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub
                  style={{ display: "inline-block", marginRight: "1.5rem" }}
                />
              </a>

              <a
                href="https://www.facebook.com/lalitrajput.lalitrajput.716/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillFacebook
                  style={{ display: "inline-block", marginRight: "1.5rem" }}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/lalit-lodhi-467677201/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn
                  style={{ display: "inline-block", marginRight: "1.5rem" }}
                />
              </a>
              <a
                href="https://www.instagram.com/lalitlodhi_official/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram style={{ display: "inline-block" }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default secondPageHome;
