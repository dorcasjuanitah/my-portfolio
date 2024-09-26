import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ backgroundColor: "#F5F5DC" }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#556B2F" }}>
              <b>
              LET ME <span className="accent-color" style={{ color: "#6B8E23" }}> INTRODUCE </span> MYSELF
              </b>
            </h1>
            <p className="home-about-body" style={{ color: "#556B2F" }}>
              I am a versatile software developer skilled in both front-end and back-end technologies.
              <br />
              <br />I am fluent in technologies including JavaScript, React, HTML, CSS, Flask, and Python.
              
                <b className="accent-color" style={{ color: "#6B8E23" }}>
                  {" "}
                  My background in digital marketing enhances my ability to implement
                  strategies for user engagement and traffic growth, making me a valuable asset to any development team.
                </b>
              
              <br />
              <br />
              My fields of interest are building new&nbsp;
              
                <b className="accent-color" style={{ color: "#6B8E23" }}>Web Technologies and Products</b> and also in areas related to{" "}
                <b className="accent-color" style={{ color: "#6B8E23" }}>Blockchain</b>.
              
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with
              <b className="accent-color" style={{ color: "#6B8E23" }}>Node.js</b> and modern Javascript libraries like
              
                <b className="accent-color" style={{ color: "#6B8E23" }}> React.js and Next.js</b>.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="avatar" /> 
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ color: "#556B2F" }}><b>FIND ME ON</b></h1>
            <p style={{ color: "#556B2F" }}>
              Feel free to <span className="accent-color" style={{ color: "#6B8E23" }}>contact me via</span>
            </p>
            <ul className="home-about-social-links">
              {/* Social Icons */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

