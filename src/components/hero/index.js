import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero" style={{ marginTop: 60, marginBottom: 60 }}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={6} className="hero-left">
            <h1 className="display-4 mb-5">
              We Love <br /> Delicious Foods!
            </h1>
            <div className="mb-2">
              <Link to="/order">
                <div
                  style={{
                    padding: 15,
                    width: "50%",
                    textAlign: "center",
                  }}
                  className="btn-primary-red mt-3"
                >
                  Order Now
                </div>
              </Link>
            </div>
          </Col>
          <Col lg={6} className="hero-right">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/images/hero-1.jpg")}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/images/hero-2.jpg")}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../../assets/images/hero-3.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
