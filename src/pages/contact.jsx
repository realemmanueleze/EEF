import { Contact } from "@/components/Contact";
import React from "react";
import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Emmanuel Eze Foundation</title>
        <meta
          name="description"
          content="Contact the Emmanuel Eze Foundation for more information about our free coding, design, and math bootcamps for disadvantaged children and teens."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="canonical"
          href="https://emmanuelezefoundation.org/contact"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Contact />
    </>
  );
};

export default ContactUs;
