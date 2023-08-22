import React from "react";
import Link from "next/link";
import importantLinks from "@/data/importantLinks";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/about-us">About</Link>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>

      <li>
        <a target="_blank" href="https://medium.com/@emmanuelezefoundation">
          Blog
        </a>
      </li>

      <li>
        <a
          href={importantLinks.volunteer}
          target="_blank"
        >
          Volunteer
        </a>
      </li>
    </ul>
  );
};
export default Nav;
