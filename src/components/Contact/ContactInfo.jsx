import React from "react";
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";

const location = {
  center: {
    lat: 59.95,
    lng: 38.6676,
  },
  zoom: 11,
};
const ContactInfo = () => {
  return (
    <>
      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rn-contact-address mt_dec--30">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Phone Number</h4>
                    <p>
                      <a href="tel:+1 (301) 539-9084">+1 (301) 539-9084</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p>
                      <a href="mailto:emmanuelezefoundation@gmail.com">
                        emmanuelezefoundation@gmail.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:example@gmail.com">
                        admin@emmanuelezefoundation.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Location</h4>
                    <p>
                      Shanna Drive, <br />
                      Accokeek Maryland, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt--40 row--15">
        <div className="col-lg-7">
          <ContactForm formStyle="contact-form-1" />
        </div>
        <div className="col-lg-5 mt_md--30 mt_sm--30">
          <GoogleMapStyle />
        </div>
      </div>
    </>
  );
};
export default ContactInfo;
