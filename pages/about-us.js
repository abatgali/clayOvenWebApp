import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Banner from "../components/template/AboutUs/Banner";

function Aboutus() {
  useEffect(() => {
    if (window.RunMe) {
      window.RunMe();
    }

    return () => {};
  }, []);

  return (
    <Layout>
      <Banner />
      <div>
        {/* Section */}
        <section className="section section-bg-edge">
          <div className="image left bottom col-md-7">
            <div className="bg-image">
              <img
                src="http://assets.suelo.pl/soup/img/photos/bg-chef.jpg"
                alt
              />
            </div>
          </div>
          <div className="container">
            <div className="col-lg-5 offset-lg-5 col-md-9 offset-md-3">
              <div className="rate mb-5 rate-lg">
                <i className="fa fa-star active" />
                <i className="fa fa-star active" />
                <i className="fa fa-star active" />
                <i className="fa fa-star active" />
                <i className="fa fa-star" />
              </div>
              <h2>The best food in London!</h2>
              <p className="lead">
                Donec a eros metus. Vivamus volutpat leo dictum risus
                ullamcorper condimentum. Cras sollicitudin varius condimentum.
                Praesent a dolor sem....
              </p>
              <p>
                Nam eleifend elementum sapien et bibendum. Nunc ac diam
                efficitur, ultrices lorem quis, consectetur odio. Nullam
                vulputate, eros quis accumsan cursus, elit lectus bibendum
                nulla, sed dapibus ligula tellus at purus. Fusce id eros id mi
                cursus semper. Quisque efficitur bibendum nunc a consectetur.
                Maecenas vitae quam iaculis, scelerisque purus nec, varius
                purus. Nullam eget varius elit. Donec eget facilisis nunc, non
                rutrum lorem.
              </p>
              <h6>Mark Johnson, Chef</h6>
              <img src="assets/img/svg/sign.svg" alt className="mb-5" />
              <h4>What people say about Us?</h4>
              <a href="page-reviews.html" className="btn btn-outline-primary">
                <span>Check our reviews</span>
              </a>
            </div>
          </div>
        </section>
        {/* Section */}
        <section className="section section-lg dark bg-dark">
          {/* BG Image */}
          <div className="bg-image bg-parallax">
            <img
              src="http://assets.suelo.pl/soup/img/photos/bg-croissant.jpg"
              alt
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
}

export default Aboutus;
