import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/template/Service/Banner";

const Service = () => {
  return (
    <Layout>
      <Banner />
      {/* Section */}
      <div>
        <section className="section section-double">
          <div className="row no-gutters">
            <div className="content col-xl-4 col-md-5">
              <h2>Weddings</h2>
              <p className="lead text-muted">
                Praesent scelerisque mi ac bibendum tristique. Cras in magna a
                quam molestie tincidunt nec vitae diam.
              </p>
              <a
                href="page-contact.html"
                className="btn btn-outline-primary btn-lg"
              >
                <span>Get a quote</span>
              </a>
            </div>
            <div className="image col-xl-8 col-md-7">
              <div className="bg-image">
                <img
                  src="http://assets.suelo.pl/soup/img/photos/service-weddings.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-double">
          <div className="row no-gutters">
            <div className="content col-xl-4 col-md-5">
              <h2>Engagement Parties</h2>
              <p className="lead text-muted">
                Praesent scelerisque mi ac bibendum tristique. Cras in magna a
                quam molestie tincidunt nec vitae diam.
              </p>
              <a
                href="page-contact.html"
                className="btn btn-outline-primary btn-lg"
              >
                <span>Get a quote</span>
              </a>
            </div>
            <div className="image col-xl-8 col-md-7 order-md-first">
              <div className="bg-image">
                <img
                  src="http://assets.suelo.pl/soup/img/photos/service-engagement.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-double">
          <div className="row no-gutters">
            <div className="content col-xl-4 col-md-5">
              <h2>Birthday Parties</h2>
              <p className="lead text-muted">
                Praesent scelerisque mi ac bibendum tristique. Cras in magna a
                quam molestie tincidunt nec vitae diam.
              </p>
              <a
                href="page-contact.html"
                className="btn btn-outline-primary btn-lg"
              >
                <span>Get a quote</span>
              </a>
            </div>
            <div className="image col-xl-8 col-md-7">
              <div className="bg-image">
                <img
                  src="http://assets.suelo.pl/soup/img/photos/service-birthday.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-lg dark bg-dark">
          <div className="bg-image bg-parallax">
            <img
              src="http://assets.suelo.pl/soup/img/photos/bg-croissant.jpg"
              alt=""
            />
          </div>

          <div className="container text-center">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="mb-3">Would you like to visit Us?</h2>
              <h5 className="text-muted">
                Book a table even right now or make an online order!
              </h5>
              <a href="menu-list-navigation.html" className="btn btn-primary">
                <span>Order Online</span>
              </a>
              <a href="book-a-table.html" className="btn btn-outline-primary">
                <span>Book a table</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Service;
