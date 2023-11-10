import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./styles.about";
import {
  SiCodechef,
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
  SiCodingninjas,
} from "react-icons/si";
const CodingProfiles = () => {
  return (
    <Row style={style.SkillsetRowStyle}>
      <div>
        <Col style={style.SkillsetColStyle}>
          <a
            href="https://leetcode.com/lalit_kumar_20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode style={style.SkillsetIconStyle} />
          </a>
        </Col>
        <Col style={style.SkillsetColStyle}>
          <a
            href="https://www.codechef.com/users/wizard_lalit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodechef style={style.SkillsetIconStyle} />
          </a>
        </Col>
        <Col style={style.SkillsetColStyle}>
          <a
            href="https://auth.geeksforgeeks.org/user/lalit007lodhi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGeeksforgeeks style={style.SkillsetIconStyle} />
          </a>
        </Col>
        <Col style={style.SkillsetColStyle}>
          <a
            href="https://codeforces.com/profile/the_sky_bug"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces style={style.SkillsetIconStyle} />
          </a>
        </Col>
        <Col style={style.SkillsetColStyle}>
          <a
            href="https://www.codingninjas.com/studio/profile/b17ce670-3a2c-4575-8d93-0b6c33a2add0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodingninjas style={style.SkillsetIconStyle} />
          </a>
        </Col>
      </div>
    </Row>
  );
};

export default CodingProfiles;
