import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="page-title bg-light">
        <div className="bg-image bg-parallax">
          <img
            src="http://assets.suelo.pl/soup/img/photos/bg-desk.jpg"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-4">
              <h1 className="mb-0">FAQ</h1>
              <h4 className="text-muted mb-0">
                Some informations about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
