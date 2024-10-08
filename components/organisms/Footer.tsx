"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[var(--mainBlack)] text-white py-6 border-t  border-t-white">
      <div className="mx-5 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[960px] xl:max-w-[var(--container-width)] flex sm:mx-auto  justify-between">
        <ScrollLink to="/" className="font-robotoCondensed hover:opacity-50 cursor-pointer font-bold">
          Cars Spot
        </ScrollLink>
        <ScrollLink
          to="/"
          className="font-robotoCondensed underline hover:opacity-50 cursor-pointer leading-6"
        >
          Polityka prywatności
        </ScrollLink>
      </div>
    </div>
  );
};

export default Footer;
