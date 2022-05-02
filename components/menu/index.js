import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const Menu = () => {
  return (
    <div style={{ marginBottom: 60, marginTop: 60 }} id="gtco-menu">
      <Container>
        <div className="section-content">
          <Row className="mb-5">
            <Col md={12}>
              <div className="heading-section text-center">
                <span className="subheading">Specialities</span>
                <h2>Our Menu</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4} className="menu-wrap">
              <div className="heading-menu">
                <h3 className="text-center mb-5">Breakfast</h3>
              </div>
              <div className="menus d-flex align-items-center">
                <div className="menu-img rounded-circle">
                  <Image
                    className="img-fluid"
                    src={require("../../public/assets/images/breakfast-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="text-wrap">
                  <Row className="align-items-start">
                    <Col className="col-8">
                      <h4>Egg Sandwich</h4>
                    </Col>
                    <Col className="col-4">
                      <h4 className="text-muted menu-price">$30</h4>
                    </Col>
                  </Row>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>

              <div className="menus d-flex align-items-center">
                <div className="menu-img rounded-circle">
                  <Image
                    className="img-fluid"
                    src={require("../../public/assets/images/breakfast-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="text-wrap">
                  <Row className="align-items-start">
                    <Col className="col-8">
                      <h4>Egg Sandwich</h4>
                    </Col>
                    <Col className="col-4">
                      <h4 className="text-muted menu-price">$30</h4>
                    </Col>
                  </Row>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>

              <div className="menus d-flex align-items-center">
                <div className="menu-img rounded-circle">
                  <Image
                    className="img-fluid"
                    src={require("../../public/assets/images/breakfast-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="text-wrap">
                  <Row className="align-items-start">
                    <Col className="col-8">
                      <h4>Egg Sandwich</h4>
                    </Col>
                    <Col className="col-4">
                      <h4 className="text-muted menu-price">$30</h4>
                    </Col>
                  </Row>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>
            </Col>

            {/* second row */}

            <Col lg={4} className="menu-wrap">
              <div className="heading-menu">
                <h3 className="text-center mb-5">Breakfast</h3>
              </div>
              <div className="menus d-flex align-items-center">
                <div className="menu-img rounded-circle">
                  <Image
                    className="img-fluid"
                    src={require("../../public/assets/images/breakfast-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="text-wrap">
                  <Row className="align-items-start">
                    <Col className="col-8">
                      <h4>Egg Sandwich</h4>
                    </Col>
                    <Col className="col-4">
                      <h4 className="text-muted menu-price">$30</h4>
                    </Col>
                  </Row>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>

              <div className="menus d-flex align-items-center">
                <div className="menu-img rounded-circle">
                  <Image
                    className="img-fluid"
                    src={require("../../public/assets/images/breakfast-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="text-wrap">
                  <Row className="align-items-start">
                    <Col className="col-8">
                      <h4>Egg Sandwich</h4>
                    </Col>
                    <Col className="col-4">
                      <h4 className="text-muted menu-price">$30</h4>
                    </Col>
                  </Row>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>

              <div className="menus d-flex align-items-center">
                <div className="menu-img rounded-circle">
                  <Image
                    className="img-fluid"
                    src={require("../../public/assets/images/breakfast-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="text-wrap">
                  <Row className="align-items-start">
                    <Col className="col-8">
                      <h4>Egg Sandwich</h4>
                    </Col>
                    <Col className="col-4">
                      <h4 className="text-muted menu-price">$30</h4>
                    </Col>
                  </Row>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>
            </Col>

            {/* third row */}
            <Col lg={4} className="menu-wrap">
              <div className="heading-menu">
                <h3 className="text-center mb-5">Breakfast</h3>
              </div>
              <div className="menus d-flex align-items-center">
                <div className="menu-img rounded-circle">
                  <Image
                    className="img-fluid"
                    src={require("../../public/assets/images/breakfast-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="text-wrap">
                  <Row className="align-items-start">
                    <Col className="col-8">
                      <h4>Egg Sandwich</h4>
                    </Col>
                    <Col className="col-4">
                      <h4 className="text-muted menu-price">$30</h4>
                    </Col>
                  </Row>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>

              <div className="menus d-flex align-items-center">
                <div className="menu-img rounded-circle">
                  <Image
                    className="img-fluid"
                    src={require("../../public/assets/images/breakfast-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="text-wrap">
                  <Row className="align-items-start">
                    <Col className="col-8">
                      <h4>Egg Sandwich</h4>
                    </Col>
                    <Col className="col-4">
                      <h4 className="text-muted menu-price">$30</h4>
                    </Col>
                  </Row>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>

              <div className="menus d-flex align-items-center">
                <div className="menu-img rounded-circle">
                  <Image
                    className="img-fluid"
                    src={require("../../public/assets/images/breakfast-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="text-wrap">
                  <Row className="align-items-start">
                    <Col className="col-8">
                      <h4>Egg Sandwich</h4>
                    </Col>
                    <Col className="col-4">
                      <h4 className="text-muted menu-price">$30</h4>
                    </Col>
                  </Row>
                  <p>Meat Ball, Mie</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
