import React from "react";
import homeImage from "../../Assests/homeProfile.png";
import { Container, Row, Col } from "react-bootstrap";
import TypingTag from "./text-typing";
import SecondPage from "./secondPageHome"

const home = () => {
  return (
    <section>
   
    <Container fluid className="home-section" id="home">
      {/* <Particle /> */}
      <Container className="home-content">
        <Row>
          <Col style={{marginTop:"18rem",color:"white",fontFamily: "cursive",fontSize:"2.3rem"}} className="home-header ">
            <h1  className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 style={{marginTop:"1rem",color:"white" }} className="heading-name">
              I'M
              <strong style={{color:"#4DD0E1" }}className="main-name"> LALIT KUMAR</strong>
            </h1>

            <div style={{ marginTop:"3rem", textAlign: "left" }}>
              <TypingTag />
           
            </div>
          </Col>

          <Col md={6} style={{ paddingBottom: 20 }}>
          <img
        style={{
          alignItems: "center",
          display: "flex",
          marginTop: "10rem",
         marginLeft:"2.8rem",

          width: "550px",
          height: "450px",
        }}
        src={homeImage}
        alt="brand"
      />
          </Col>
        </Row>
      </Container>
    </Container>
    <SecondPage/>
  </section>
  );
};

export default home;
