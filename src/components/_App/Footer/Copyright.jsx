import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { socials } from "@/data";

const Copyright = () => {
  return (
    <div className="copyright-area copyright-style-one variation-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-7 col-sm-12 col-12">
            <div className="copyright-left">
              <ul className="ft-menu link-hover">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms And Condition</a>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 mt_sm--20">
            <div className="copyright-center text-center">
              <ul className="social-icon social-default color-lessdark justify-content-center">
                <li>
                  <a href={socials.facebook} target="_blank">
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a href={socials.twitter} target="_blank">
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  <a href={socials.instagram} target="_blank">
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a href={socials.linkedin} target="_blank">
                    <FiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
            <div className="copyright-right text-center text-lg-right">
              <p className="copyright-text">
                Copyright All rights reserved © {new Date().getFullYear()} EEF
                Inc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
