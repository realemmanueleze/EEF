import React from "react";
import AccordionOne from "../common/accordion/AccordionOne";
import SectionTitleTwo from "../common/sectionTitle/SectionTitleTwo";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="rn-company-mission-are rn-section-gap">
      <SectionTitleTwo
        textAlign="text-center"
        radiusRounded=""
        title="What About Our Companies."
      />
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/banner/smiley.png"
                alt="About Images"
              />
            </div>
          </div>
          <div className="col-lg-7 mt_md--30 mt_sm--30">
            <AccordionOne customStyle="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrequentlyAskedQuestions;
