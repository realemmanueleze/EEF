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
          content="The Emmanuel Eze Foundation empowers and transforms the lives of disadvantaged children and teens through quality education and skill acquisition training. Our free bootcamps prepare children for the demands of tomorrow's workplace."
        />
        <meta
          name="keywords"
          content="Emmanuel Eze Foundation, education, skill acquisition, disadvantaged children, bootcamps, coding, design, math, teens, workplace"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
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
