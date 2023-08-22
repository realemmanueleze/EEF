import { useState } from "react";
import { FiX, FiArrowRight } from "react-icons/fi";
import importantLinks from "@/data/importantLinks";

const HeaderTop = () => {
  const [deactive, setClass] = useState("");
  return (
    <div
      className={`header-top-news bg_image ${deactive}`}
      style={{
        backgroundColor: "purple",
      }}
    >
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="content">
                  <span className="rn-badge">$2,500 Scholarship</span>
                  <span className="news-text">
                    Apply for our Tech BootCamp <strong>-Age: 8-17.</strong>
                  </span>
                </div>
                <div className="right-button">
                  <a
                    className="btn-read-more"
                    target="_blank"
                    href={importantLinks.apply}
                  >
                    <span className="">
                      Apply Now <FiArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-close">
        <button className="close-button" onClick={() => setClass("deactive")}>
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
