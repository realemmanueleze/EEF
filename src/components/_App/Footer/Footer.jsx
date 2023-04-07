import React from "react";
import CalltoActionEight from "@/elements/calltoaction/CalltoActionEight";
import Copyright from "./Copyright";
import ScrollTop from "./ScrollTop";

const Footer = () => {
  return (
    <>
      <div className="footer-style-2">
        <CalltoActionEight />
        <Copyright />
      </div>
      <ScrollTop />
    </>
  );
};
export default Footer;
