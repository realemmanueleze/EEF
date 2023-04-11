import React from "react";
import ServiceOne from "@/elements/service/ServiceOne";
import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import { Programs } from "../common/programs";

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
              title="Our Tech BootCamps"
              description="All bootcamps are free and open to children and teens aged 8-17,</br> and each boot camp lasts for 12 weeks."
            />
          </div>
        </div>
        <Programs
          serviceStyle="service__style--1 bg-color-blackest radius mt--20 rbt-border"
          textAlign="text-start"
        />
      </div>
    </div>
  );
};

export default index;
