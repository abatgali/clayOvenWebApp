import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/template/Contact/Banner";

const Contact = () => {
  return (
    <Layout>
      <Banner />
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 offset-lg-1 col-md-6 mb-5 mb-md-0">
              <img
                src="assets/img/logo-horizontal-dark.svg"
                alt=""
                className="mb-5"
                width="130"
              />
              <h4 className="mb-0">Soup Restaurant</h4>
              <span className="text-muted">Green Street 22, New York</span>
              <hr className="hr-md" />
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <h6 className="mb-1 text-muted">Phone:</h6>
                  +48 21200 2122 221
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-1 text-muted">E-mail:</h6>
                  <a href="#">hello@example.com</a>
                </div>
              </div>
              <hr className="hr-md" />
              <h6 className="mb-3 text-muted">Follow Us!</h6>
              <a
                href="#"
                className="icon icon-social icon-circle icon-sm icon-facebook"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="#"
                className="icon icon-social icon-circle icon-sm icon-google"
              >
                <i className="fa fa-google"></i>
              </a>
              <a
                href="#"
                className="icon icon-social icon-circle icon-sm icon-twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="#"
                className="icon icon-social icon-circle icon-sm icon-youtube"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                href="#"
                className="icon icon-social icon-circle icon-sm icon-instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div className="col-lg-5 offset-lg-2 col-md-6">
              <div
                className="google-map h-500 shadow"
                data-lat="50.064651"
                data-lon="19.944981"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
