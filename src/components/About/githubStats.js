import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import style from "./styles.about";

const githubStats = () => {
  return (
    <>
    <Row style={style.SkillsetRowStyle}>
      <GitHubCalendar
        username="lalit-kumar-20"
        blockSize={15}
        blockMargin={5}
        color="#4DD0E1"
        fontSize={16}
      />
    </Row>
    </>
  )
}

export default githubStats

