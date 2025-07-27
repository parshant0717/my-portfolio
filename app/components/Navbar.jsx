import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-100 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="nav-bg" className="w-full" />
      </div>
      <nav
        className={`flex items-center justify-between px-5 lg:px-8  xl:px-[8%] py-4 w-full fixed z-50 ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-24 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center  gap-6 lg:gap-8 rounded-full px-12 py-3${
            isScroll
              ? ""
              : " bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent "
          }`}
        >
          <li>
            <a href="#top" className="font-family-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-family-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#experiance" className="font-family-Ovo">
              Experiance
            </a>
          </li>
          <li>
            <a href="#work" className="font-family-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-family-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="theme-mode-dark-light"
              className="w-6 cursor-pointer"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-family-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="contact-icon"
              className="w-3"
            />
          </a>
          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu-icon"
              className="w-6"
            />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed  -right-64 top-0 bottom-0  w-64  z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="toggle-icon"
              className="cursor-pointer w-5"
            />
          </div>
          <li>
            <a onClick={closeMenu} href="#top" className="font-family-Ovo">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about" className="font-family-Ovo">
              About me
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              href="#experiance"
              className="font-family-Ovo"
            >
              Experiance
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work" className="font-family-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact" className="font-family-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
