import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiC,
  SiMysql,
  SiTypescript,
  SiSqlite,
  SiJest,
  SiNextdotjs,
} from "react-icons/si";

import { FaServer } from "react-icons/fa";
import style from "./styles.about";

const skillset = () => {
  return (
    <>
      <Row style={style.SkillsetRowStyle}>
        <div>
          <Col style={style.SkillsetColStyle}>
            <SiC style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <CgCPlusPlus style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <DiJavascript1 style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <SiTypescript style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <DiReact style={style.SkillsetIconStyle} />
          </Col>
        </div>
        <div style={style.SkillsetDivStyle}>
          <Col style={style.SkillsetColStyle}>
            <DiNodejs style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <FaServer style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <SiSqlite style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <SiMysql style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <DiMongodb style={style.SkillsetIconStyle} />
          </Col>
        </div>

        <div style={style.SkillsetDivStyle}>
          <Col style={style.SkillsetColStyle}>
            <DiGit style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <SiJest style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <SiNextdotjs style={style.SkillsetIconStyle} />
          </Col>
          <Col style={style.SkillsetColStyle}>
            <DiPython style={style.SkillsetIconStyle} />
          </Col>
        </div>
      </Row>
    </>
  );
};

export default skillset;
