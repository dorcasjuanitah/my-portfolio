import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/myImg.jpeg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ backgroundColor: "#0f2511" }}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, color: "#FFFFFF" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ color: "#FFFFFF" }}>
                I'M
                <strong className="main-name"> DORCAS CHEPKIRUI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", color: "#FFFFFF" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myImg}
                alt="My Picture"
                className="img-fluid"
                style={{ maxHeight: "500px", float: "right" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

