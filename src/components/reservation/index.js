import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const Reservation = () => {
  return (
    <div
      id="gtco-reservation"
      className="bg-fixed bg-white section-padding overlay"
      style={{
        backgroundImage: `url(${require("../../assets/images/reservation-bg.jpg")})`,
        marginTop: 60,
        marginBottom: 260,
      }}
    >
      <Container
        style={{
          paddingTop: 130,
          paddingBottom: 130,
        }}
      >
        <Row>
          <Col lg={5}>
            <div className="section-content bg-white p-5 shadow">
              <div className="heading-section text-center">
                <span className="subheading">Reservation</span>
                <h2>Book Now</h2>
              </div>
              <Form>
                <Form.Floating className="mb-3">
                  <Form.Control type="text" placeholder="Name" />
                  <label>Name</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                  <label>Email</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control type="text" placeholder="Phone" />
                  <label>Phone</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control type="date" placeholder="Date" />
                  <label>Date</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                  <Form.Control type="time" placeholder="Time" />
                  <label>Time</label>
                </Form.Floating>

                <FloatingLabel className="mb-3" label="Persons">
                  <Form.Select aria-label="Floating label select example">
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel
                  className="mb-3"
                  controlId="floatingTextarea2"
                  label="Your Message"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: 200 }}
                  />
                </FloatingLabel>

                <Col md={12} className="text-center">
                  <div
                    className="btn-primary-red "
                    style={{
                      padding: 15,
                      width: 140,
                      marginTop: 5,
                      textAlign: "center",
                      borderRadius: 5,
                      cursor: "pointer",
                    }}
                  >
                    Send Message
                  </div>
                </Col>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reservation;
