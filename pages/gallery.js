import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/template/Gallery/Banner";

function gallery() {
  return (
    <Layout>
      <Banner />
      {/* Section */}
      <section id="gallery" className="section section-gallery cover">
        {/* Gallery Carousel */}
        <div className="gallery-carousel inner-controls">
          <div className="slide">
            <div className="bg-image bg-parallax">
              <img
                src="http://assets.suelo.pl/soup/img/gallery/gallery01.jpg"
                alt
              />
            </div>
          </div>
          <div className="slide">
            <div className="bg-image bg-parallax">
              <img
                src="http://assets.suelo.pl/soup/img/gallery/gallery02.jpg"
                alt
              />
            </div>
          </div>
          <div className="slide">
            <div className="bg-image bg-parallax">
              <img
                src="http://assets.suelo.pl/soup/img/gallery/gallery03.jpg"
                alt
              />
            </div>
          </div>
          <div className="slide">
            <div className="bg-image bg-parallax">
              <img
                src="http://assets.suelo.pl/soup/img/gallery/gallery04.jpg"
                alt
              />
            </div>
          </div>
          <div className="slide">
            <div className="bg-image bg-parallax">
              <img
                src="http://assets.suelo.pl/soup/img/gallery/gallery05.jpg"
                alt
              />
            </div>
          </div>
        </div>
        {/* Gallery Carousel Nav */}
        <div className="gallery-nav">
          <img
            src="http://assets.suelo.pl/soup/img/gallery/gallery01-min.jpg"
            alt
          />
          <img
            src="http://assets.suelo.pl/soup/img/gallery/gallery02-min.jpg"
            alt
          />
          <img
            src="http://assets.suelo.pl/soup/img/gallery/gallery03-min.jpg"
            alt
          />
          <img
            src="http://assets.suelo.pl/soup/img/gallery/gallery04-min.jpg"
            alt
          />
          <img
            src="http://assets.suelo.pl/soup/img/gallery/gallery05-min.jpg"
            alt
          />
        </div>
        <div className="set-fullscreen" data-local-scroll>
          <a href="#gallery">
            <i className="ti ti-fullscreen" />
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default gallery;
