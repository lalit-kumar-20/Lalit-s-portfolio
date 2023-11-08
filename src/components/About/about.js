import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CodingProfiles from "./CodingProfiles";
import Skillset from "./skillset";
import AboutContent from "./aboutContent";
import laptopImg from "../../Assests/about_image .png";
import Tools from "./tools";
import GithubStats from "./githubStats";


const About = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row
          style={{
            justifyContent: "center",
            marginTop: "6rem",
            color: "white",
            textAlign: "center",
            display: "flex",
          }}
        >
          <Col
            md={7}
            style={{
              marginTop: "3rem",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "2.5rem", paddingBottom: "1rem" }}>
              Know Who{" "}
              <strong style={{ color: "#4DD0E1", fontFamily: "cursive" }}>
                I'M
              </strong>
            </h1>
            <AboutContent />
          </Col>
          <Col  style={{ paddingTop: "6.5rem" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1
              style={{
                color: "white",
                marginTop: "3rem",
                marginLeft: "25rem",
                fontSize: "3rem",
              }}
            >
              Professional{" "}
              <span style={{ color: "#4DD0E1", fontFamily: "cursive" }}>
                {" "}
                Skillset{" "}
              </span>
            </h1>
            <Skillset />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1
              style={{
                color: "white",
                marginTop: "4rem",
                marginLeft: "32rem",
                fontSize: "3rem",
              }}
            >
              <span style={{ color: "#4DD0E1", fontFamily: "cursive" }}>
                Tools{" "}
              </span>
              I use{" "}
            </h1>
            <Tools />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1
              style={{
                color: "white",
                marginTop: "4rem",
                marginLeft: "22rem",
                fontSize: "3rem",
              }}
            >
              Checkout{" "}
              <span style={{ color: "#4DD0E1", fontFamily: "cursive" }}>
                {" "}
                Coding Profiles
              </span>
            </h1>
            <CodingProfiles />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1
              style={{
                color: "white",
                marginTop: "4rem",
                marginLeft: "31rem",
                fontSize: "3rem",
              }}
            >
               <span style={{ color: "#4DD0E1", fontFamily: "cursive" }}>
                {" "}
                 Github{" "}
              </span>
              Stats  
            </h1>
            <GithubStats />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
