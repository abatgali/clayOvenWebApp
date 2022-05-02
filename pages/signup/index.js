import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import bg from "../../public/assets/images/bg_1.jpg";

const SignupPage = () => {
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
                Sign up to <strong>Clay Ovens</strong>
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

                <div className="btn-primary-red mt-3">Submit</div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SignupPage;
