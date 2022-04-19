import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <div id="gtco-special-dishes" style={{ marginBottom: 60, marginTop: 60 }}>
      <Container>
        <div className="section-content">
          <div className="heading-section text-center">
            <span className="subheading">Specialities</span>
            <h2>Special Dishes</h2>
          </div>
          <Row className="mt-5">
            <Col className="align-self-center py-5" lg={5} md={6}>
              <h2 className="special-number">01.</h2>
              <div className="dishes-text">
                <h3>
                  <span>Beef</span>
                  <br />
                  Steak Sauce
                </h3>
                <p className="pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate, ea vero alias perferendis quas animi doloribus
                  voluptates. Atque explicabo ea nesciunt provident libero qui
                  eum, corporis esse quos excepturi soluta?
                </p>
                <h3 className="special-dishes-price">$15.00</h3>
                <Link to="/">
                  <div className="btn-primary-red mt-3">book a table</div>
                </Link>
              </div>
            </Col>
            <Col
              className="align-self-center mt-4 mt-md-0 offset-lg-2"
              lg={5}
              md={6}
            >
              <img
                className="img-fluid shadow w-100"
                src={require("../../assets/images/steak.jpg")}
                alt=""
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              className="align-self-center order-2 order-md-1 mt-4 mt-md-0"
              lg={5}
              md={6}
            >
              <img
                className="img-fluid shadow w-100"
                src={require("../../assets/images/salmon-zucchini.jpg")}
                alt=""
              />
            </Col>
            <Col
              className="align-self-center order-1 order-md-2 py-5 offset-lg-2"
              lg={5}
              md={6}
            >
              <h2 className="special-number">02.</h2>
              <div className="dishes-text">
                <h3>
                  <span>Salmon</span>
                  <br />
                  Zucchini
                </h3>
                <p className="pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Blanditiis, accusamus culpa quam amet ipsam odit ea doloremque
                  accusantium quo, itaque possimus eius. In a quis quibusdam
                  omnis atque vero dolores!
                </p>
                <h3 className="special-dishes-price">$12.00</h3>
                <Link to={"/"}>
                  <div className="btn-primary-red mt-3">book a table </div>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Speciality;
