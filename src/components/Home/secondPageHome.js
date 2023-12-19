import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileIcon from "../../Assests/ProfileIcon .png";
import Tilt from "react-parallax-tilt";
import style from "./Home.style";
import ThirdPageHome from "./thirdHomePage";

const secondPageHome = () => {
  return (
    <Container
      style={style.SPMainContainerStyle}
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row >
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
                href="/about"
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
       <ThirdPageHome/>
      </Container>
    </Container>
  );
};

export default secondPageHome;
