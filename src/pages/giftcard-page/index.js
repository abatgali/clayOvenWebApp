import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer";

const GiftCardPage = () => {
  return (
    <div className="about">
      <Container
        style={{
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          position: "absolute",
        }}
        className="container-fluid"
      >
        <Row>
          <Col
            lg={5}
            className=" align-items-stretch video-box"
            style={{
              backgroundImage: `url(${require("../../assets/images/Darilni-bon.jpg")})`,
            }}
          ></Col>

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
            <div className="content">
              <h3>
                <strong> GIFT CARDS</strong>
              </h3>

              <p className="fst-italic">
                Did you ever find yourself wondering what to gift your loved
                ones for special occasions? Are you running out of time and
                ideas? Gift giving is a generous trait, but sometimes decisions
                can be difficult. No need to worry anymore. At JB Restaurant, we
                offer an exquisite dining experience suitable for everyone –
                family, friends or business partners – and for every occasion –
                holidays, birthdays, business meetings, Christmas or New Year’s
                Eve Dinners. You decide the value of the gift card while your
                loved ones can use it whenever it is most suitable to them.
                Value gift cards can spare you a lot of time and worry when
                picking out gifts. You can collect the gift card at our
                restaurant or we can send it to you by mail. Gift cards are
                valid for 6 months (from the day of purchase) and cannot be
                exchanged for money.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default GiftCardPage;
