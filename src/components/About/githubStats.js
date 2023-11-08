import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const githubStats = () => {
  return (
    <>
    <Row style={{ color:"white",justifyContent: "center", marginTop:"1.2rem",paddingBottom: "2rem" }}>
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

