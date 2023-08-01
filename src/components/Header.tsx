import { useState } from "react";

import logo from "../../assets/shared/desktop/logo.svg";
import openHamburgerMenuIcon from "../../assets/shared/mobile/icon-hamburger.svg";
import closeHamburgerMenuIcon from "../../assets/shared/mobile/icon-close.svg";
import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  function handleHamburgerMenuIconClick() {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  }
  return (
    <nav className="header | flex flow-row justify-between p-5 pt-7 mb-3 md:p-10 lg:p-10">
      <img
        src={logo}
        alt="Company logo"
        className="logo | h-5 w-auto md:h-7 lg:h-8"
      />
      <img
        onClick={handleHamburgerMenuIconClick}
        src={
          !isHamburgerMenuOpen ? openHamburgerMenuIcon : closeHamburgerMenuIcon
        }
        alt="Hamburger menu icon"
        className="hamburger-menu-icon | h-5 w-auto md:hidden lg:hidden"
      />

      <ul className="navbar-links | hidden md:flex lg:flex flex-row space-x-7 text-grey">
        <li className="hover:cursor-pointer">HOME</li>
        <li className="hover:cursor-pointer">ABOUT US</li>
        <li className="hover:cursor-pointer">CREATE YOUR PLAN</li>
      </ul>
      {isHamburgerMenuOpen && <HamburgerMenu />}
    </nav>
  );
}
