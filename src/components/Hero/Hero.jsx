import React from "react";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="slider-area slider-style-1 bg-transparent height-750">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
              <div className="inner text-start">
                <span className="subtitle">DIGITAL CONSULTING AGENCY</span>
                <h1 className="title theme-gradient display-one">
                  Doob Company.
                </h1>
                <ul className="list-icon">
                  <li>
                    <span className="icon">
                      <FiCheck />
                    </span>{" "}
                    Track your teams progress with mobile app.
                  </li>
                  <li>
                    <span className="icon">
                      <FiCheck />
                    </span>{" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </li>
                  <li>
                    <span className="icon">
                      <FiCheck />
                    </span>{" "}
                    Your teams progress with mobile app.
                  </li>
                </ul>
                <div className="button-group mt--40">
                  <a
                    className="btn-default btn-medium round btn-icon"
                    target="_blank"
                    href="https://themeforest.net/checkout/from_item/33571911?license=regular"
                  >
                    Purchase Now{" "}
                    <i className="icon">
                      <FiArrowRight />
                    </i>
                  </a>
                  <Link
                    className="btn-default btn-medium btn-border round btn-icon"
                    href="#"
                  >
                    Contact Us{" "}
                    <i className="icon">
                      <FiArrowRight />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
              <div className="frame-image">
                <img src="./images/about/about-3.png" alt="Banner Images" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Short intro */}
      <div className="service-area rn-section-gapBottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <h3 className="title">
                  We are creative digital agency working for our company brands.
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="mb--10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quis. Ullam accusantium dignissimos repellendus nemo fugiat
                numquam, nisi odio adipisci. Veniam neque itaque expedita
                officiis rem ipsa! Ratione, rem reiciendis?
              </p>
              <div className="readmore-btn">
                <Link className="btn-read-more" href="#">
                  <span>View More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
