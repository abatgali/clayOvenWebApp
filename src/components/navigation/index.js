import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="start-header navigation-wrap">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{ textAlign: "center" }}
            className=" navbar-nav pt-4 py-md-0"
          >
            <Link
              to={"/menu"}
              className="nav-link nav-item ps-4  mt-xs-4 ps-md-0 ms-0 ms-md-4"
            >
              Menu
            </Link>

            <Link
              to={"/giftcard"}
              className="nav-link nav-item ps-4  mt-xs-4 ps-md-0 ms-0 ms-md-4"
            >
              Gift Card
            </Link>
          </Nav>

          <Nav
            style={{ textAlign: "center" }}
            className="ms-auto navbar-nav pb-4 py-md-0"
          >
            <Link to={"/order"} className=" ps-4 mt-xs-4 ps-md-0 ms-0 ms-md-4">
              <div
                className="btn-primary-red "
                style={{
                  padding: 5,
                  width: 100,
                  marginTop: 5,
                  textAlign: "center",
                  borderRadius: 5,
                }}
              >
                Order Now
              </div>
            </Link>

            <Link to={"/login"} className="ps-4  mt-xs-4 ps-md-0 ms-0 ms-md-4">
              <div
                className="btn-primary-red "
                style={{
                  padding: 5,
                  width: 100,
                  textAlign: "center",
                  borderRadius: 5,
                  marginTop: 5,
                }}
              >
                Login
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
