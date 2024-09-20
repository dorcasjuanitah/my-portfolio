import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Dorcas Chepkirui </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently employed as a software developer at Nawiriland Limited.
            <br />
            I started my career as a Digital Marketer immediatetly after graduation from Kabarak University with a Bachelors Degree in Information Technology. I later join Moringa School to study Software Engineering and now I am a Full Stack Software Developer. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Journaling
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build softwares that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dorcas Chepkirui</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
