import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="d-lg-flex half">
      <div
        className="bg order-1 order-md-2"
        style={{
          backgroundImage: `url(${require("../../assets/images/hero-2.jpg")})`,
        }}
      ></div>
      <div className="contents order-2 order-md-1">
        <Container className="container">
          <Row className="align-items-center justify-content-center">
            <Col md={7} className="col-md-7">
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
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div class="d-flex mb-5 align-items-center">
                  <span class="ms-auto">
                    <a href="#" className="forgot-pass link">
                      Forgot Password
                    </a>
                  </span>
                </div>

                <Link to={"/"}>
                  <div className="btn-primary-red mt-3">Submit</div>
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
