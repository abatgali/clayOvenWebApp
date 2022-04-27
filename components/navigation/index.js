import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import Image from "next/image";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="start-header navigation-wrap">
      <Container>
        <Link passHref href={"/"}>
          <Image
            className="logo-container"
            src={require("../../public/assets/images/logo.png")}
            alt=""
            width={176}
            height={64}
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{ textAlign: "center" }}
            className=" navbar-nav pt-4 py-md-0"
          >
            <Link
              href={"menu"}
              className=" ps-4 mt-xs-4 ps-md-0 ms-0 ms-md-4"
              passHref
            >
              <div
                activeClassName="active"
                className="nav-link nav-item ps-4  mt-xs-4 ps-md-0 ms-0 ms-md-4"
              >
                Menu
              </div>
            </Link>

            <Link
              href={"giftcard"}
              className=" ps-4 mt-xs-4 ps-md-0 ms-0 ms-md-4"
              passHref
            >
              <div
                activeClassName="active"
                className="nav-link nav-item ps-4  mt-xs-4 ps-md-0 ms-0 ms-md-4"
              >
                Gift Card
              </div>
            </Link>
          </Nav>

          <Nav
            style={{ textAlign: "center" }}
            className="ms-auto navbar-nav pb-4 py-md-0"
          >
            <Link
              href={"/order"}
              className=" ps-4 mt-xs-4 ps-md-0 ms-0 ms-md-4"
              passHref
            >
              <div
                activeClassName="active"
                className="nav-link nav-item ps-4  mt-xs-4 ps-md-0 ms-0 ms-md-4"
              >
                Order Now
              </div>
            </Link>

            <Link
              href={"/login"}
              className="ps-4  mt-xs-4 ps-md-0 ms-0 ms-md-4"
              passHref
            >
              <div
                activeClassName="active"
                className="nav-link nav-item ps-4  mt-xs-4 ps-md-0 ms-0 ms-md-4"
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
