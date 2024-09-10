import React from "react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import Link from "next/link";

const Navbar = () => {
  const navList = ["Galeria zdjęć", "FaQ"];

  return (
    <div className="py-4">
      <div className="md:max-w-[700px] lg:max-w-[960px] xl:max-w-[var(--container-width)] flex items-center mx-auto justify-between">
        <Logo />
        <nav>
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
        <div className="md:w-[150px] w-[300px] flex justify-end">
          <Button content="Zadzwoń do nas" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
