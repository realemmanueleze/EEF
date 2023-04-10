import React from "react";
import { FiArrowRight } from "react-icons/fi";
const callToActionData = {
  title: "Ready to join any of our bootcamps?",
  subtitle: "Journey to your best future",
  btnText: "Apply Now",
};

const CalltoActionEight = () => {
  return (
    <div className="rn-callto-action rn-call-to-action style-8 content-wrapper">
      <div className="container">
        <div className="row row--0 align-items-center ">
          <div className="col-lg-12">
            <div className="inner">
              <div className="content text-center">
                <h2 className="title">{callToActionData.title}</h2>
                <h6 className="subtitle">{callToActionData.subtitle}</h6>
                <div className="call-to-btn text-center mt--30">
                  <a
                    className="btn-default btn-icon"
                    target="_blank"
                    href="https://goodhopetutoring.typeform.com/to/ru6KSgf4"
                  >
                    {callToActionData.btnText}{" "}
                    <i className="icon">
                      <FiArrowRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionEight;
