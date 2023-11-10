import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./styles.about";
import {
  SiVisualstudiocode,
  SiGithub,
  SiClion,
  SiJupyter,
  SiHeroku,
} from "react-icons/si";
const tools = () => {
  return (
    <Row style={style.SkillsetRowStyle}>
      <div>
        <Col style={style.SkillsetColStyle}>
          <SiVisualstudiocode style={style.SkillsetIconStyle} />
        </Col>
        <Col style={style.SkillsetColStyle}>
          <SiGithub style={style.SkillsetIconStyle} />
        </Col>
        <Col style={style.SkillsetColStyle}>
          <SiClion style={style.SkillsetIconStyle} />
        </Col>
        <Col style={style.SkillsetColStyle}>
          <SiHeroku style={style.SkillsetIconStyle} />
        </Col>
        <Col style={style.SkillsetColStyle}>
          <SiJupyter style={style.SkillsetIconStyle} />
        </Col>
      </div>
    </Row>
  );
};

export default tools;
