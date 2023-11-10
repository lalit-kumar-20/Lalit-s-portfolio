import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import style from "./styles.about";

const aboutContent = () => {
  return (
    <Card style={style.AboutContentCardStyle}>
      <Card.Body>
        <blockquote className="blockquote">
          <p>
            Hi Everyone, I am{" "}
            <span style={style.AboutRowStrongCommonStyle}>Lalit Kumar </span>
            from{" "}
            <span style={style.AboutRowStrongCommonStyle}> Kasganj, India</span>
            .
            <br />
            <h1 style={style.AboutContentLineSpacingStyle}>
              I am final year student Pursuing Bachelor of Technology in{" "}
              <span style={style.AboutRowStrongCommonStyle}>
                Electronics and Computer Science Engineering{" "}
              </span>
              from
              <span style={style.AboutRowStrongCommonStyle}>
                {" "}
                Institute of Engineering and Technology Lucknow
              </span>
              .{" "}
            </h1>
            <h1 style={style.AboutContentLineSpacingStyle}>
              I have good understanding of CS Fundamentals Like:{" "}
              <span style={style.AboutRowStrongCommonStyle}>
                Data Structure and Algorithms
              </span>
              ,{" "}
              <span style={style.AboutRowStrongCommonStyle}>
                Database Management System
              </span>
              ,
              <span style={style.AboutRowStrongCommonStyle}>
                {" "}
                Object Oriented Programming
              </span>
              ,
              <span style={style.AboutRowStrongCommonStyle}>
                {" "}
                Operating Systems
              </span>{" "}
              and{" "}
              <span style={style.AboutRowStrongCommonStyle}>System Design</span>
              .
            </h1>
            <h1 style={style.AboutContentLineSpacingStyle}>
              I am Proficient in{" "}
              <span style={style.AboutRowStrongCommonStyle}>
                Web Developement Technologies
              </span>{" "}
              as mentioned below.
            </h1>
            Additionally, I was former Software Engineer Intern at{" "}
            <span style={style.AboutRowStrongCommonStyle}>Microsoft</span>.
            <h1 style={{ marginTop: "1.5rem" }}>
              Apart from coding, some other activities that I love to do!
            </h1>
          </p>
          <ul style={style.AboutContentActivitiesStyle}>
            <li>
              <ImPointRight style={style.AboutContentIconInlineStyle} />
              <h1 style={style.AboutContentTextInlineStyle}>
                Watching Sci-fi Genre
              </h1>
            </li>
            <li>
              <ImPointRight style={style.AboutContentIconInlineStyle} />
              <h1 style={style.AboutContentTextInlineStyle}>Book Reading</h1>
            </li>
            <li>
              <ImPointRight style={style.AboutContentIconInlineStyle} />
              <h1 style={style.AboutContentTextInlineStyle}>Travelling</h1>
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
