import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Full Stack Software Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      <Typewriter
        options={{
          strings: ["1. Front-End Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      <Typewriter
        options={{
          strings: ["2. Back-End Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
