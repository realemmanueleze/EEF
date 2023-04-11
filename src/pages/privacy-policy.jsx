import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Emmanuel Eze Foundation</title>
        <meta
          name="description"
          content="Privacy Policy for the Emmanuel Eze Foundation, a non-profit organization that provides education for underprivileged children."
        />
      </Head>

      <section className="container">
        <h1>Privacy Policy</h1>
        <p>
          The Emmanuel Eze Foundation is committed to protecting the privacy and
          personal information of all users of our website. This Privacy Policy
          explains how we collect, use, and disclose personal information and
          how we keep it secure.
        </p>

        <h2>Personal Information We Collect</h2>
        <p>
          We may collect personal information from you when you visit our
          website, make a donation, or sign up to receive our newsletter. This
          information may include your name, email address, mailing address, and
          payment information.
        </p>

        <h2>How We Use Your Personal Information</h2>
        <p>
          We use your personal information to communicate with you, process
          donations, send newsletters, and improve our services. We may also use
          your information for research and analysis purposes, but this data is
          always anonymized and aggregated.
        </p>

        <h2>Disclosure of Your Personal Information</h2>
        <p>
          We do not sell, rent, or trade your personal information to third
          parties. However, we may disclose your information to trusted
          third-party service providers who assist us in operating our website
          or providing services to you. We require all our service providers to
          keep your personal information confidential and to use it only for the
          purposes for which we have engaged them.
        </p>

        <h2>Security of Your Personal Information</h2>
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, and disclosure. We use industry-standard
          encryption technology to ensure the security of your payment
          information.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any material changes by posting the new Privacy Policy on our
          website.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at info@emmanuelezefoundation.org.
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
