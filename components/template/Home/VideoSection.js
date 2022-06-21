import React from "react";

function VideoSection() {
  return (
    <section className="section section-lg dark bg-dark">
      {/* BG Video */}
      <div
        className="bg-video dark-overlay"
        data-src="http://assets.suelo.pl/soup/video/video_2.mp4"
        data-type="video/mp4"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-center order-md-2 mb-5 mb-md-0">
            <button
              className="btn-play"
              data-toggle="video-modal"
              data-target="#modalVideo"
              data-video="https://www.youtube.com/embed/uVju5--RqtY"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-2">
              Check our <strong>promo</strong> video!
            </h1>
            <h4 className="text-muted mb-5">
              Taste it now with our online order!
            </h4>
            <a
              href="page-offers.html"
              className="btn btn-outline-primary btn-lg"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
