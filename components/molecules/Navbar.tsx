import React from "react";
import Logo from "../atoms/Logo";
import Button from "../atoms/ButtonBlue";
import Link from "next/link";

const Navbar = () => {
  const navList = ["Galeria zdjęć", "FaQ"];

  return (
    <div className="h-[79px] py-4">
      <div className="flex items-center max-w-[1200px] h-[47px] mx-auto justify-between">
        <Logo />
        <nav>
          <ul className="flex gap-[24px] text-base">
            {navList.map((item, index) => (
              <li key={index}>
                <Link href="/#" className="hover:opacity-50">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button content="Zadzwoń do nas" />
      </div>
    </div>
  );
};

export default Navbar;
