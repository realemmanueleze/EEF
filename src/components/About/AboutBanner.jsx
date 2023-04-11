import React from "react";

const AboutBanner = () => {
  return (
    <div
      className="slider-area slider-style-1 height-850 bg_image"
      data-black-overlay="7"
      style={{
        backgroundImage: `url(./images/banner/boy-2.jpeg)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner pt--80 text-center">
              <div>
                <h3 className="rn-sub-badge">
                  <span className="theme-gradient">
                    About Us
                  </span>
                </h3>
              </div>
              <h1 className="title display-one">
                Emmanuel Eze <br /> Foundation
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
