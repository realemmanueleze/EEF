import React from "react";
import TabOne from "@/components/common/tab/TabOne";
import SectionTitle from "@/components/common/sectionTitle/SectionTitle";

const About = () => {
  return (
    <div className="rwt-tab-area rn-section-gap">
      <div className="container">
        <div className="row mb--40">
          <div className="col-lg-12">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="Companies About."
              title="What About Our Companies."
              description="We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials."
            />
          </div>
        </div>
        <TabOne />
      </div>
    </div>
  );
};

export default About;
