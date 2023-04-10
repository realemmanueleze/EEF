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
              subtitle="Emmanuel Eze Foundation"
              title="Our Vision"
              description="Empowering one million disadvantaged children by 2030 with cutting-edge tech skills for tomorrow's workplace."
            />
          </div>
        </div>
        <TabOne />
      </div>
    </div>
  );
};

export default About;
