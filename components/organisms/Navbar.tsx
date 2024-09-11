"use client";
import Logo from "../atoms/Logo";
import CallButton from "../atoms/CallButton";
import Link from "next/link";
import { useState } from "react";
import NavButton from "../atoms/NavButton";

const Navbar = () => {
  const navList = ["Galeria zdjęć", "FaQ"];
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuHandler = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <div className="py-4 sticky top-0 z-10">
      <div className="mx-5 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[960px] xl:max-w-[var(--container-width)] flex items-center sm:mx-auto justify-between">
        <Logo />
        <nav className="hidden md:block">
          <ul className="text-[var(--mainBlack)] flex items-center justify-between gap-6 font-robotoFlex leading-6">
            {navList.map((item, index) => (
              <li key={index}>
                <Link href="/#" className="hover:opacity-50">
                  {item}
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
      {menuIsOpen ? (
        <nav className="absolute top-[80px] md:hidden bg-[var(--backgroundWhite)]">
          <ul className="text-[var(--mainBlack)] flex flex-col items-center justify-center gap-6 font-robotoFlex leading-6 w-full h-full">
            {navList.map((item, index) => (
              <li key={index}>
                <Link href="/#" className="hover:opacity-50">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
};

export default Navbar;
