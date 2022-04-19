import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      style={{ marginTop: 60, marginBottom: 60 }}
      className="bg-white section-padding"
    >
      <Container>
        <Row>
          <Col
            sm={5}
            className="img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2"
            style={{
              backgroundImage: `url(${require("../../assets/images/hero-2.jpg")})`,
            }}
          ></Col>

          <Col sm={7} className="py-5 pl-md-0 pl-4">
            <div className="heading-section ps-lg-5 ms-md-5">
              <span className="subheading">About</span>
              <h2>Welcome to ClayOvens</h2>
            </div>
            <div className="ps-lg-5 ms-md-5">
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. A small river named
                Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted
                parts of sentences fly into your mouth.
              </p>
              <h3 className="mt-5">Special Recipe</h3>
              <Row>
                <Col className="col-4">
                  <Link className="link" to={"/"}>
                    <div className="thumb-menu">
                      <img
                        className="img-fluid img-cover"
                        src={require("../../assets/images/hero-1.jpg")}
                        alt=""
                      />
                      <h6>Australian Organic Beef</h6>
                    </div>
                  </Link>
                </Col>
                <Col className="col-4">
                  <Link className="link" to={"/"}>
                    <div className="thumb-menu">
                      <img
                        className="img-fluid img-cover"
                        src={require("../../assets/images/hero-1.jpg")}
                        alt=""
                      />
                      <h6>Australian Organic Beef</h6>
                    </div>
                  </Link>
                </Col>
                <Col className="col-4">
                  <Link className="link" to={"/"}>
                    <div className="thumb-menu">
                      <img
                        className="img-fluid img-cover"
                        src={require("../../assets/images/hero-1.jpg")}
                        alt=""
                      />
                      <h6>Australian Organic Beef</h6>
                    </div>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
