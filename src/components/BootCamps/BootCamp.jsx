import React from "react";
import ServiceOne from "@/elements/service/ServiceOne";
import SectionTitle from "@/components/common/sectionTitle/SectionTitle";

const index = () => {
  return (
    <div className="rn-service-area rn-section-gap ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="What we can do for you"
              title="Services provide for you."
              description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
            />
          </div>
        </div>
        <ServiceOne
          serviceStyle="service__style--1 bg-color-blackest radius mt--20 rbt-border"
          textAlign="text-start"
        />
      </div>
    </div>
  );
};

export default index;
