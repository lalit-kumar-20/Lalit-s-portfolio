import React from "react";
import homeImage from "../../Assests/homeProfile.png";
import { Container, Row, Col } from "react-bootstrap";
import TypingTag from "./text-typing";
import SecondPage from "./secondPageHome";
import style from "./Home.style";
const home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col style={style.HomeRow1ColStyle} className="home-header ">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 style={style.HomeRow1Co1H1Style} className="heading-name">
                I'M
                <strong
                  style={style.HomeRow1Co1SpanStyle}
                  className="main-name"
                >
                  {" "}
                  LALIT KUMAR
                </strong>
              </h1>

              <div style={style.HomeRow1Co1DivStyle}>
                <TypingTag />
              </div>
            </Col>

            <Col md={6} style={style.HomeRow1Co2Style}>
              <img
                style={style.HomeRowCol2ImgStyle}
                src={homeImage}
                alt="brand"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <SecondPage />
    </section>
  );
};

export default home;
