import React from "react";

function Main() {
  return (
    <section className="section section-main section-main-4 bg-primary-light">
      {/* Content */}
      <div className="section-main-content container">
        <div className="row">
          <div className="col-md-5">
            <h1 className="display-1">Fresh &amp; Delicious</h1>
            <h4 className="mb-5">Taste it now with our online order!</h4>
            <a
              href="menu-grid-collapse.html"
              className="btn btn-outline-primary btn-lg animated"
              data-animation="fadeInUp"
              data-animation-delay={400}
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="section-main-image">
        <div className="bg-image">
          <img
            src="http://assets.suelo.pl/soup/img/photos/hero-fresh.jpg"
            alt
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
