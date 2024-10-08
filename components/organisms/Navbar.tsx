"use client";
import Logo from "../atoms/Logo";
import CallButton from "../atoms/MainButton";
import Link from "next/link";
import { useState } from "react";
import NavButton from "../atoms/NavButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import PhoneCallButton from "../atoms/PhoneCallButton";

const Navbar = () => {
  const navList = [
    { text: "Galeria zdjęć", to: "gallery" },
    { text: "FaQ", to: "faq" },
  ];
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuHandler = () => {
    setMenuIsOpen((prev) => !prev);
  };
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <motion.div style={{ backgroundColor }} className="py-4 sticky top-0 z-10">
      <div className="mx-5 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[960px] xl:max-w-[var(--container-width)] flex items-center gap-2 sm:mx-auto justify-between">
        <Logo />
        <nav className="hidden md:block">
          <ul className="text-[var(--mainBlack)] flex items-center justify-between gap-6 font-robotoFlex leading-6">
            {navList.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  to={item.to}
                  className="hover:opacity-50 cursor-pointer"
                >
                  {item.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" md:w-[150px] lg:w-[300px] flex justify-end">
          <PhoneCallButton
            content="Zadzwoń do nas"
            href="tel:+48 123 456 789"
          />
        </div>
        <NavButton menuHandler={menuHandler} menuIsOpen={menuIsOpen} />
      </div>
      <nav
        className={`absolute top-[70px] sm:top-[79px] md:hidden bg-[var(--backgroundWhite)] overflow-hidden w-full transition-all duration-500 ease-linear ${
          menuIsOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="text-[var(--mainBlack)] flex flex-col items-center font-robotoFlex leading-6 ">
          {navList.map((item, index) => (
            <ScrollLink
              onClick={() => setMenuIsOpen(false)}
              to={item.to}
              offset={-79}
              key={index}
              className="hover:opacity-50 w-full text-[25px] h-10 text-center mt-10 border-b-2 border-b-[var(--mainBlue)] cursor-pointer"
            >
              <li>{item.text}</li>
            </ScrollLink>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
