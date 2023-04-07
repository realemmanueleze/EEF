import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img className="logo-light" src="/public/images/logo/logo.png" alt="EEF Logo" />
        <img className="logo-dark" src="/public/images/logo/logo.png" alt="EEF Logo" />
      </Link>
    </div>
  );
};

export default Logo;
