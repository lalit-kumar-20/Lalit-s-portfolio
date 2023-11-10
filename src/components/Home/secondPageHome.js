import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileIcon from "../../Assests/ProfileIcon .png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import style from "./Home.style";

const secondPageHome = () => {
  return (
    <Container
      style={style.SPMainContainerStyle}
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={style.SPRow1Col1H1Style} className="heading-name">
              LET ME
              <strong style={style.SPRow1Col1H1SpanStyle} className="main-name">
                {" "}
                INTRODUCE{" "}
              </strong>
              MYSELF
            </h1>
            <p style={style.SPRow1Col1ParaStyle} className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <div>
                I am fluent in Language like
                <i>
                  <b style={style.SPRow1Col1H1Span2Style}> C++, Javascript </b>{" "}
                  and <b style={style.SPRow1Col1H1Span2Style}> TypeScript. </b>
                </i>
              </div>
              <div style={style.SPmarginTop}>
                My field of Interest's are building new &nbsp;
                <i>
                  <b style={style.SPRow1Col1H1SpanStyle}>Web Technologies</b>{" "}
                  and <b style={style.SPRow1Col1H1SpanStyle}>Products </b>
                  {/* and
                  also in areas related to{" "}
                  <b className="purple">
                    Blockchain.
                  </b> */}
                </i>
              </div>
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={style.SPRow1Col1H1SpanStyle}>Node.js</b> and
              <i>
                <b style={style.SPRow1Col1H1SpanStyle}>
                  {" "}
                  Modern Javascript Library{" "}
                </b>
                and
                <b style={style.SPRow1Col1H1SpanStyle}> Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b style={style.SPRow1Col1H1SpanStyle}> React.js </b>
                and
                <b style={style.SPRow1Col1H1SpanStyle}> Next.js</b>
              </i>
              <br />
              <a
                style={style.SPKnowMoreStyle}
                href="http://localhost:3000/about"
              >
                Know more...
              </a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                style={style.SPProfileImgStyle}
                src={ProfileIcon}
                className="img-fluid logo "
                alt="brand"
              />
            </Tilt>
          </Col>
        </Row>
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

export default secondPageHome;
