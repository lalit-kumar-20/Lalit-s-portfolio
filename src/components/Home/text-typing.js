import React from "react";
import Typewriter from "typewriter-effect";
import style from "./Home.style";

function Type() {
  return (
    <div style={style.HomeRow1Co1SpanStyle}>
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "MERN Stack Developer",
            "Freelancer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
