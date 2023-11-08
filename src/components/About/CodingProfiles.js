import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiCodechef,
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
  SiCodingninjas,
} from "react-icons/si";
const CodingProfiles = () => {
  return (
    <Row
      style={{
        marginLeft: "1.5rem",
        justifyContent: "center",
        marginTop: "2.5rem",
        color: "white",
      }}
    >
      <div>
        <Col
          style={{
            display: "inline-block",
            marginRight: "1.5rem",
            height: "8rem",
            width: "14rem",
            borderColor: "#4DD0E1",
            borderWidth: "0.1rem",
            borderRadius: "0.35rem",
          }}
        >
          <a
            href="https://leetcode.com/lalit_kumar_20/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode
              style={{
                marginTop: "1.5rem",
                marginLeft: "3.5rem",
                width: "4rem",
                height: "5rem",
              }}
            />
          </a>
        </Col>
        <Col
          style={{
            display: "inline-block",
            marginRight: "1.5rem",
            height: "8rem",
            width: "14rem",
            borderColor: "#4DD0E1",
            borderWidth: "0.1rem",
            borderRadius: "0.35rem",
          }}
        >
          <a
            href="https://www.codechef.com/users/wizard_lalit"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodechef
              style={{
                marginTop: "1.5rem",
                marginLeft: "3.5rem",
                width: "4rem",
                height: "5rem",
              }}
            />
          </a>
        </Col>
        <Col
          style={{
            display: "inline-block",
            marginRight: "1.5rem",
            height: "8rem",
            width: "14rem",
            borderColor: "#4DD0E1",
            borderWidth: "0.1rem",
            borderRadius: "0.35rem",
          }}
        >
          <a
            href="https://auth.geeksforgeeks.org/user/lalit007lodhi/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGeeksforgeeks
              style={{
                marginTop: "1.5rem",
                marginLeft: "3.5rem",
                width: "4rem",
                height: "5rem",
              }}
            />
          </a>
        </Col>
        <Col
          style={{
            display: "inline-block",
            marginRight: "1.5rem",
            height: "8rem",
            width: "14rem",
            borderColor: "#4DD0E1",
            borderWidth: "0.1rem",
            borderRadius: "0.35rem",
          }}
        >
          <a
            href="https://codeforces.com/profile/the_sky_bug"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces
              style={{
                marginTop: "1.5rem",
                marginLeft: "3.5rem",
                width: "4rem",
                height: "5rem",
              }}
            />
          </a>
        </Col>
        <Col
          style={{
            display: "inline-block",
            marginRight: "1.5rem",
            height: "8rem",
            width: "14rem",
            borderColor: "#4DD0E1",
            borderWidth: "0.1rem",
            borderRadius: "0.35rem",
          }}
        >
          <a
            href="https://www.codingninjas.com/studio/profile/b17ce670-3a2c-4575-8d93-0b6c33a2add0"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodingninjas
              style={{
                marginTop: "1.5rem",
                marginLeft: "3.5rem",
                width: "4rem",
                height: "5rem",
              }}
            />
          </a>
        </Col>
      </div>
    </Row>
  );
};

export default CodingProfiles;
