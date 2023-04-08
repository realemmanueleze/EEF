import React from "react";
import { HeaderOne } from "./Header";
import HeaderTop from "./HeaderTop";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main className="page-wrapper">
        <HeaderTop />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />
        <img src={`${process.env.PUBLIC_URL}/images/demo/404.png`} />
        {children}
        <Footer />
      </main>
    </>
  );
};
export default Layout;
