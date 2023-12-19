import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CodingProfiles from "./CodingProfiles";
import Skillset from "./skillset";
import AboutContent from "./aboutContent";
import laptopImg from "../../Assests/about_image .png";
import Tools from "./tools";
import GithubStats from "./githubStats";
import style from "./styles.about";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Container style={{marginTop:'12rem'}}>
        <Row style={style.AboutRow1Style}>
          <Col md={7} style={style.AboutRow1Col1Style}>
            <h1 style={style.AboutRow1Col1HeadingStyle}>
              Know Who{" "}
              <strong style={style.AboutRowStrongCommonStyle}>I'M</strong>
            </h1>
            <AboutContent />
          </Col>
          <Col style={style.AboutRow1Col2Style} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={style.AboutRowHeadingCommonStyle}>
              Professional
              <span style={style.AboutRowStrongCommonStyle}>Skillset</span>
            </h1>
            <Skillset />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={style.AboutRowHeadingCommonStyle}>
              <span style={style.AboutRowStrongCommonStyle}>Tools</span>
              <h1 style={style.AboutRowStrongH1CommonStyle}>I use</h1>
            </h1>
            <Tools />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={style.AboutRowHeadingCommonStyle}>
              Checkout{" "}
              <span style={style.AboutRowStrongCommonStyle}>
                {" "}
                Coding Profiles
              </span>
            </h1>
            <CodingProfiles />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={style.AboutRowHeadingCommonStyle}>
              <span style={style.AboutRowStrongCommonStyle}> Github </span>
              <h1 style={style.AboutRowStrongH1CommonStyle}> Stats </h1>
            </h1>
            <GithubStats />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
