import React from "react";

function AboutReview() {
  return (
    <section className="section section-bg-edge">
      <div className="image right col-md-6 offset-md-6">
        <div className="bg-image">
          <img
            src="http://assets.suelo.pl/soup/img/photos/bg-food-fresh.jpg"
            alt
          />
        </div>
      </div>
      <div className="container">
        <div className="col-lg-5 col-md-9">
          <div className="rate mb-5 rate-lg">
            <i className="fa fa-star active" />
            <i className="fa fa-star active" />
            <i className="fa fa-star active" />
            <i className="fa fa-star active" />
            <i className="fa fa-star" />
          </div>
          <h1>The best food in London!</h1>
          <p className="lead text-muted mb-5">
            Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper
            condimentum. Cras sollicitudin varius condimentum. Praesent a dolor
            sem....
          </p>
          <div className="blockquotes">
            {/* Blockquote */}
            <blockquote
              className="blockquote light animated"
              data-animation="fadeInLeft"
            >
              <div className="blockquote-content">
                <div className="rate rate-sm mb-3">
                  <i className="fa fa-star active" />
                  <i className="fa fa-star active" />
                  <i className="fa fa-star active" />
                  <i className="fa fa-star active" />
                  <i className="fa fa-star" />
                </div>
                <p>It’ was amazing feeling for my belly!</p>
              </div>
              <footer>
                <img
                  src="http://assets.suelo.pl/soup/img/avatars/avatar02.jpg"
                  alt
                />
                <span className="name">
                  Mark Johnson<span className="text-muted">, Google</span>
                </span>
              </footer>
            </blockquote>
            {/* Blockquote */}
            <blockquote
              className="blockquote animated"
              data-animation="fadeInRight"
              data-animation-delay={300}
            >
              <div className="blockquote-content dark">
                <div className="rate rate-sm mb-3">
                  <i className="fa fa-star active" />
                  <i className="fa fa-star active" />
                  <i className="fa fa-star active" />
                  <i className="fa fa-star active" />
                  <i className="fa fa-star" />
                </div>
                <p>Great food and great atmosphere!</p>
              </div>
              <footer>
                <img
                  src="http://assets.suelo.pl/soup/img/avatars/avatar01.jpg"
                  alt
                />
                <span className="name">
                  Kate Hudson<span className="text-muted">, LinkedIn</span>
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutReview;
