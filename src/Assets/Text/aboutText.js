import React from "react";
import resume from "./Emmanuel Kandilas Resume 2021.pdf";

// const aboutText = `My name is Emmanuel. I am a software engineer on a never-ending quest to better
// my abilities. I get a kick out of simple, scalable code and minimal design. You can download my
// resume or check out my other media and projects below.
// I am open to all opportunities and always happy to chat.
// `;

const aboutText = (
  <p>
    My name is Emmanuel. I am a software engineer on a never-ending quest to
    better my abilities. I get a kick out of simple, scalable code and minimal
    design. You can download my{" "}
    <a href={resume} target="_blank">
      resume
    </a>{" "}
    or check out my other media and projects below. I am open to all
    opportunities and always happy to chat.
  </p>
);

export default aboutText;
