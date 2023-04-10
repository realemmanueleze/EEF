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
                <span className="subtitle">JOURNEY TO YOUR BEST FUTURE</span>
                <h1 className="title theme-gradient display-one">
                  Dare to Dream.
                </h1>
                <ul className="list-icon">
                  <li>
                    <span className="icon">
                      <FiCheck />
                    </span>{" "}
                    Providing free education and skill training for children and
                    teens.
                  </li>
                  <li>
                    <span className="icon">
                      <FiCheck />
                    </span>{" "}
                    Investing in the future of our communities, one child at a
                    time.
                  </li>
                  <li>
                    <span className="icon">
                      <FiCheck />
                    </span>{" "}
                    Creating equal opportunities so that every child can thrive.
                  </li>
                </ul>
                <div className="button-group mt--40">
                  <a
                    className="btn-default btn-medium round btn-icon"
                    target="_blank"
                    href="https://goodhopetutoring.typeform.com/to/ru6KSgf4"
                  >
                    Apply{" "}
                    <i className="icon">
                      <FiArrowRight />
                    </i>
                  </a>
                  <Link
                    className="btn-default btn-medium btn-border round btn-icon"
                    href="/contact"
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
                  Make the most of our Tech BootCamps, valued at $2,500, without
                  any cost.
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="mb--10">
                We offer three distinct bootcamps that cater to different
                interests and skill sets: the math bootcamp, coding bootcamp and
                design bootcamp. All bootcamps are free and open to children and
                teens aged 8-17, and each boot camp lasts for 12 weeks.
              </p>
              <div className="readmore-btn">
                <a
                  className="btn-read-more"
                  target="_blank"
                  href="https://goodhopetutoring.typeform.com/to/ru6KSgf4"
                >
                  <span>Apply</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
