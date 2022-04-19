import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
              <form action="" method="post" name="contact-us">
                <Row>
                  <Col md={12} className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </Col>
                  <Col md={12} className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </Col>
                  <Col md={12} className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                  </Col>

                  <Col md={6} className="form-group">
                    <div className="input-group date" id="datetimepicker4">
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        target="#datetimepicker4"
                        placeholder="Date"
                      />
                    </div>
                  </Col>
                  <Col md={6} className="form-group">
                    <div className="input-group date" id="datetimepicker4">
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        target="#datetimepicker4"
                        placeholder="Time"
                      />
                    </div>
                  </Col>

                  <Col md={12} className="form-group">
                    <select
                      name=""
                      className="form-control select2-hidden-accessible"
                      id="selectPerson"
                      aria-hidden="true"
                      tabIndex={-1}
                      placeholder="Person"
                    >
                      <option></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </Col>

                  <Col md={12} className="form-group">
                    <textarea
                      class="form-control"
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Your Message ..."
                    ></textarea>
                  </Col>

                  <Col md={12} className="text-center">
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
                      className="btn btn-primary-red btn-shadow btn-lg"
                      type="submit"
                      name="submit"
                    >
                      Send Message
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reservation;
