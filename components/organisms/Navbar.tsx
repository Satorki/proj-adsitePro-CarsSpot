"use client";
import Logo from "../atoms/Logo";
import CallButton from "../atoms/CallButton";
import Link from "next/link";
import { useState } from "react";
import NavButton from "../atoms/NavButton";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const navList = [
    { text: "Galeria zdjęć", href: "/#gallery" },
    { text: "FaQ", href: "/#" },
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
                <Link href={item.href} className="hover:opacity-50">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" md:w-[150px] lg:w-[300px] flex justify-end">
          <CallButton content="Zadzwoń do nas" />
        </div>
        <NavButton menuHandler={menuHandler} menuIsOpen={menuIsOpen} />
      </div>
      <nav
        className={`absolute top-[80px] md:hidden bg-[var(--backgroundWhite)] overflow-hidden w-full transition-all duration-700 ease-linear ${
          menuIsOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="text-[var(--mainBlack)] flex flex-col items-center font-robotoFlex leading-6 ">
          {navList.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:opacity-50 w-full text-[25px] h-10 text-center mt-10 border-b-2 border-b-[var(--mainBlue)]"
            >
              <li>{item.text}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
