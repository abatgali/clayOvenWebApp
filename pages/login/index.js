import Link from "next/link";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import bg from "../../public/assets/images/hero-2.jpg";

const LoginPage = () => {
  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></div>
      <div className="contents order-2 order-md-1">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={7}>
              <h3>
                Login to <strong>Clay Ovens</strong>
              </h3>
              <p className="my-4">
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                consectetur adipisicing.
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We will never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="d-flex mb-5 align-items-center">
                  <span className="ms-auto">
                    <Link href={"/"} className="forgot-pass link">
                      Forgot Password
                    </Link>
                  </span>
                </div>

                <Link href={"/"} passHref>
                  <div className="btn-primary-red mt-3">Login</div>
                </Link>
                <Link href={"/signup"} passHref>
                  <div className="btn-primary-red mt-3 ms-4">Sign Up</div>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
