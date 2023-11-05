import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div  style={{color:"#4DD0E1"}}>
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