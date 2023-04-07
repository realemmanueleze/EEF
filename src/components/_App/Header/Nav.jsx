import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link href="#">Home</Link>
        <ul className="submenu">
          <li>
            <Link href="/business-consulting">Business Consulting</Link>
          </li>
          <li>
            <Link href="/business-consulting-2">Business Consulting 02</Link>
          </li>
          <li>
            <Link href="/corporate">Corporate</Link>
          </li>
          <li>
            <Link href="/business">Business</Link>
          </li>
          <li>
            <Link href="/digital-agency">Digital Agency</Link>
          </li>
          <li>
            <Link href="/finance">Finance</Link>
          </li>
          <li>
            <Link href="/company">Company</Link>
          </li>
          <li>
            <Link href="/marketing">Marketing Agency</Link>
          </li>
          <li>
            <Link href="/travel-agency">Travel Agency</Link>
          </li>
          <li>
            <Link href="/consulting">Consulting</Link>
          </li>
          <li>
            <Link href="/seo-agency">SEO Agency</Link>
          </li>
          <li>
            <Link href="/personal-portfolio">Personal Portfolio</Link>
          </li>
          <li>
            <Link href="/event-conference">Event Conference</Link>
          </li>
          <li>
            <Link href="/creative-portfolio">Creative Portfolio</Link>
          </li>
          <li>
            <Link href="/freelancer">Freelancer</Link>
          </li>
          <li>
            <Link href="/international-consulting">
              International Consulting
            </Link>
          </li>
          <li>
            <Link href="/startup">Startup</Link>
          </li>
          <li>
            <Link href="/web-agency">Web Agency</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/about-us">About</Link>
      </li>

      <li className="with-megamenu">
        <Link href="#">Elements</Link>
        <div className="rn-megamenu">
          <div className="wrapper">
            <div className="row row--0">
              <div className="col-lg-3 single-mega-item">
                <ul className="mega-menu-item">
                  <li>
                    <Link href="/button">Button</Link>
                  </li>
                  <li>
                    <Link href="/service">Service</Link>
                  </li>
                  <li>
                    <Link href="/counter">Counter</Link>
                  </li>
                  <li>
                    <Link href="/progressbar">Progressbar</Link>
                  </li>
                  <li>
                    <Link href="/accordion">Accordion</Link>
                  </li>
                  <li>
                    <Link href="/social-share">Social Share</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Blog Grid</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 single-mega-item">
                <ul className="mega-menu-item">
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/testimonial">Testimonial</Link>
                  </li>
                  <li>
                    <Link href="/timeline">Timeline</Link>
                  </li>
                  <li>
                    <Link href="/tab">Tab</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/split">Split Section</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 single-mega-item">
                <ul className="mega-menu-item">
                  <li>
                    <Link href="/call-to-action">Call To Action</Link>
                  </li>
                  <li>
                    <Link href="/video-popup">Video</Link>
                  </li>
                  <li>
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/brand">Brand</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/error">404</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 single-mega-item">
                <ul className="mega-menu-item">
                  <li>
                    <Link href="/advance-tab">
                      Advance Tab <span className="rn-badge-card">Hot</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Brand Carousel{" "}
                      <span className="rn-badge-card">Comming</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="advance-pricing">
                      Advance Pricing <span className="rn-badge-card">Hot</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-details/1">Portfolio Details</Link>
                  </li>
                  <li>
                    <Link href="/blog-details/1">Blog Details</Link>
                  </li>
                  <li>
                    <Link href="/error">404 Page</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="has-droupdown">
        <Link href="#">Blog</Link>
        <ul className="submenu">
          <li>
            <Link href="/blog-grid">Blog Grid</Link>
          </li>
          <li>
            <Link href="/blog-grid-sidebar">Blog Grid Sidebar</Link>
          </li>
          <li>
            <Link href="/blog-list-view">Blog List View</Link>
          </li>
          <li>
            <Link href="/blog-list-sidebar">Blog List View Sidebar</Link>
          </li>
        </ul>
      </li>

      <li className="has-droupdown">
        <Link href="#">Portfolio</Link>
        <ul className="submenu">
          <li>
            <Link href="/portfolio">Portfolio Default</Link>
          </li>
          <li>
            <Link href="/portfolio-three-column">Portfolio Three Column</Link>
          </li>
          <li>
            <Link href="/portfolio-full-width">Portfolio Full Width</Link>
          </li>
          <li>
            <Link href="/portfolio-grid-layout">Portfolio Grid Layout</Link>
          </li>
          <li>
            <Link href="/portfolio-box-layout">Portfolio Box Layout</Link>
          </li>
        </ul>
      </li>

      <li className="has-droupdown">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default Nav;
