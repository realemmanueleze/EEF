import React from "react";
import Logo from "@/components/common/logo/Logo";
import Nav from "./Nav";
import { FiX } from "react-icons/fi";

const MobileMenu = ({ show, onClose }) => {
  if (typeof window !== "undefined") {
    const elements = document.querySelectorAll(
      ".popup-mobile-menu .has-droupdown > a"
    );

    const elementsTwo = document.querySelectorAll(
      ".popup-mobile-menu .with-megamenu > a"
    );

    for (const i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    for (const i in elementsTwo) {
      if (elementsTwo.hasOwnProperty(i)) {
        elementsTwo[i].onclick = function () {
          this.parentElement
            .querySelector(".rn-megamenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
  }

  return (
    <div className={`popup-mobile-menu ${show ? "active" : ""}`}>
      <div className="inner">
        <div className="header-top">
          <Logo />
          <div className="close-menu">
            <span className="close-button" onClick={onClose}>
              <FiX />
            </span>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};
export default MobileMenu;
