import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{ paddingTop: 200 }}
      className="mastfoot pb-5 bg-white section-padding pb-0"
    >
      <Container className="inner">
        <Row>
          <Col lg={4}>
            <div className="footer-widget pr-lg-5 pr-0">
              <h2>Clay Ovens</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                obcaecati quisquam id sit omnis explicabo voluptate aut placeat,
                soluta, nisi ea magni facere, itaque incidunt modi? Magni, et
                voluptatum dolorem.
              </p>
              <nav className="nav nav-mastfoot justify-content-start">
                <Link href={"/"}>
                  <div className="nav-link">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="nav-link">
                    <i className="fab fa-twitter"></i>
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="nav-link">
                    <i className="fab fa-instagram"></i>
                  </div>
                </Link>
              </nav>
            </div>
          </Col>
          <Col lg={4}>
            <div className="footer-widget px-lg-5 px-0">
              <h4>Open Hours</h4>
              <ul className="list-unstyled open-hours">
                <li className="d-flex justify-content-between">
                  <span>Monday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Tuesday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Wednesday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Thursday</span>
                  <span>9:00 - 24:00</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Friday</span>
                  <span>9:00 - 02:00</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Saturday</span>
                  <span>9:00 - 02:00</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Sunday</span>
                  <span> Closed</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4}>
            <div className="footer-widget pl-lg-5 pl-0">
              <h4>Newsletter</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <form id="newsletter">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
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
                  className="btn btn-primary-red w-100"
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
