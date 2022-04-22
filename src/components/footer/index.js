import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{ paddingTop: 200 }}
      class="mastfoot pb-5 bg-white section-padding pb-0"
    >
      <Container class="inner">
        <Row>
          <Col lg={4}>
            <div class="footer-widget pr-lg-5 pr-0">
              <h2>Clay Ovens</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                obcaecati quisquam id sit omnis explicabo voluptate aut placeat,
                soluta, nisi ea magni facere, itaque incidunt modi? Magni, et
                voluptatum dolorem.
              </p>
              <nav class="nav nav-mastfoot justify-content-start">
                <Link to={"/"}>
                  <div class="nav-link">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                </Link>
                <Link to={"/"}>
                  <div class="nav-link">
                    <i class="fab fa-twitter"></i>
                  </div>
                </Link>
                <Link to={"/"}>
                  <div class="nav-link">
                    <i class="fab fa-instagram"></i>
                  </div>
                </Link>
              </nav>
            </div>
          </Col>
          <Col lg={4}>
            <div class="footer-widget px-lg-5 px-0">
              <h4>Open Hours</h4>
              <ul class="list-unstyled open-hours">
                <li class="d-flex justify-content-between">
                  <span>Monday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Tuesday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Wednesday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Thursday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Friday</span>
                  <span>9:00 - 02:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Saturday</span>
                  <span>9:00 - 02:00</span>
                </li>
                <li class="d-flex justify-content-between">
                  <span>Sunday</span>
                  <span> Closed</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div class="footer-widget pl-lg-5 pl-0">
              <h4>Newsletter</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <form id="newsletter">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="emailNewsletter"
                    aria-describedby="emailNewsletter"
                    placeholder="Enter email"
                  />
                </div>
                <button
                  style={{
                    display: "inline-block",
                    backgroundColor: "#f34949",
                    borderColor: "#f34949",
                    color: "#fff",
                    borderRadius: 30,
                    padding: "9px 25px",
                    textTransform: "capitalize",
                    transition: "all 0.3s ease 0s",
                  }}
                  type="submit"
                  class="btn btn-primary-red w-100"
                >
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
