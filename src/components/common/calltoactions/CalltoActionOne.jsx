import React from "react";

const callToActionData = {
  title: "Ready to join any of our bootcamps?",
  subtitle: "Journey to your best future",
  btnText: "Apply Now",
};

const CalltoActionOne = () => {
  return (
    <div
      className="rn-callto-action clltoaction-style-default style-3 bg_image"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-2.jpg)`,
      }}
    >
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper">
          <div className="col-lg-8">
            <div className="inner">
              <div className="content text-start">
                <h2 className="title">{callToActionData.title}</h2>
                <h6 className="subtitle">{callToActionData.subtitle}</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="call-to-btn text-start text-lg-right">
              <a
                className="btn-default"
                href="https://goodhopetutoring.typeform.com/to/ru6KSgf4"
                target="_blank"
              >
                {callToActionData.btnText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionOne;
