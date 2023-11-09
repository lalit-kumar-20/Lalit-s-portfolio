import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const aboutContent = () => {
  return (
    <Card style={{ backgroundColor: "black" }}>
      <Card.Body>
        <blockquote className="blockquote">
          <p style={{ textAlign: "justify", fontFamily: "system-ui" }}>
            Hi Everyone, I am{" "}
            <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
              Lalit Kumar{" "}
            </span>
            from{" "}
            <span style={{ color: "#4DD0E1", fontFamily: "cursive" }}>
              {" "}
              Kasganj, India
            </span>
            .
            <br />
            <h1 style={{ lineHeight: "2rem", marginTop: "0.2rem" }}>
              I am final year student Pursuing Bachelor of Technology in{" "}
              <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
                Electronics and Computer Science Engineering{" "}
              </span>
              from
              <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
                {" "}
                Institute of Engineering and Technology Lucknow
              </span>
              .{" "}
            </h1>
            <h1
              style={{
                lineHeight: "2rem",
                marginTop: "0.7rem",
                marginBottom: "1rem",
              }}
            >
              I have good understanding of CS Fundamentals Like:{" "}
              <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
                Data Structure and Algorithms
              </span>
              ,{" "}
              <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
                Database Management System
              </span>
              ,
              <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
                {" "}
                Object Oriented Programming
              </span>
              ,
              <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
                {" "}
                Operating Systems
              </span>{" "}
              and{" "}
              <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
                System Design
              </span>.
            </h1>
            <h1
              style={{
                lineHeight: "2rem",
                marginTop: "0.2rem",
                marginBottom: "1rem",
              }}
            >
              I am Proficient in{" "}
              <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
                Web Developement Technologies
              </span>{" "}
              as mentioned below.
            </h1>
            Additionally, I was former Software Engineer Intern at{" "}
            <span style={{ fontFamily: "cursive", color: "#4DD0E1" }}>
              Microsoft
            </span>
            .
            <h1 style={{ marginTop: "1.5rem" }}>
              Apart from coding, some other activities that I love to do!
            </h1>
          </p>
          <ul style={{ marginTop: "1.5rem" }}>
            <li style={{ marginRight: "22rem" }}>
              <ImPointRight style={{ display: "inline-block" }} />
              <h1 style={{ display: "inline-block", marginLeft: "3rem" }}>
                Watching Sci-fi Genre
              </h1>
            </li>
            <li style={{ marginRight: "26rem" }}>
              <ImPointRight style={{ display: "inline-block" }} />
              <h1 style={{ display: "inline-block", marginLeft: "3rem" }}>
                Book Reading
              </h1>
            </li>
            <li style={{ marginRight: "28.4rem" }}>
              <ImPointRight style={{ display: "inline-block" }} />
              <h1 style={{ display: "inline-block", marginLeft: "3rem" }}>
                Travelling
              </h1>
            </li>
          </ul>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">Lalit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default aboutContent;
