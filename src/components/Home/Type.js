import React from "react";
import Typewriter from "typewriter-effect";


function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          '<span style="color: #FFFFFF;">Full Stack Software Developer</span>',
          '<span style="color: #FFFFFF;">Front-End Developer</span>',
          '<span style="color: #FFFFFF;">Back-End Developer</span>'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 0, // No deleting
        pauseFor: 2000, // Pause before typing the next string
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('<span style="color: #FFFFFF;">Full Stack Software Developer</span>')
          .pauseFor(2000) // Pause for 2 seconds
          .typeString('<span style="color: #FFFFFF;">Front-End Developer</span>')
          .pauseFor(2000) // Pause for 2 seconds
          .typeString('<span style="color: #FFFFFF;">Back-End Developer</span>')
          .pauseFor(2000) // Pause for 2 seconds
          .start();
      }}
    />
  );
}

export default Type;

