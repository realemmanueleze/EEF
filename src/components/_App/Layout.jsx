import React from "react";
import { HeaderOne } from "./Header";
import HeaderTop from "./HeaderTop";
import { Footer } from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          Empowering Disadvantaged Children | Emmanuel Eze Foundation
        </title>
        <meta
          name="description"
          content="ion
Empowering children (especially disadvantaged ones) with cutting-edge tech skills for a better future."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="ion
Empowering children (especially disadvantaged ones) with cutting-edge tech skills for a better future."
        />

        <meta
          property="og:image"
          content="https://asset.cloudinary.com/dnyt1jfda/85ef88386fd38927e3265119b0d196b3"
        />
        <meta
          name="keywords"
          content="Emmanuel Eze Foundation, EEF Bootcamps, EEF math bootcamp, EEF coding bootcamp, EEF design bootcamp, EEF, education, skill acquisition, disadvantaged children, bootcamps, coding, design, math, teens, workplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/logo.png" />
      </Head>
      <main className="page-wrapper">
        <HeaderTop />
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-not-transparent"
        />
        {children}
        <Footer />
      </main>
    </>
  );
};
export default Layout;
