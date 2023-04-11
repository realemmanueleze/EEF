import React from "react";
import { AboutBanner, About } from "@/components/About";
import { Values } from "@/components/Values";
import Head from "next/head";
import {
  CalltoActionOne,
  CalltoActionTwo,
} from "@/components/common/calltoactions";
import { BootCamps } from "@/components/BootCamps";
import { TeamOne } from "@/components/Team";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Emmanuel Eze Foundation</title>
        <meta
          name="description"
          content="Learn about the Emmanuel Eze Foundation's mission to empower and transform the lives of disadvantaged children and teens through quality education and skill acquisition training."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="canonical"
          href="https://emmanuelezefoundation.org/about-us"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <AboutBanner />
      <About />
      <Values />
      <BootCamps />
      <CalltoActionOne />
      <TeamOne
        column="col-lg-3 col-md-6 col-12"
        teamStyle="team-style-default style-two"
      />
      <CalltoActionTwo />
    </>
  );
};

export default AboutUs;
