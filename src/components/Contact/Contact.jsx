import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SectionTitle from "../common/sectionTitle/SectionTitle";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="container">
      <Breadcrumb
        title="We Would Love To Hear From You <br /> Please Contact Us"
        rootUrl="/"
        parentUrl="Home"
        currentUrl="Contact"
      />
      <div className="main-content container">
        <div className="rwt-contact-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb--40">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Contact Form"
                  title="Our Contact Information"
                  description=""
                />
              </div>
            </div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
