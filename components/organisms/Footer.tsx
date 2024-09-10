import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[var(--mainBlack)] text-white py-6 border-t  border-white">
      <div className="flex max-w-[1200px] mx-auto  justify-between">
        <Link href="/#" className="hover:opacity-50">
          Cars Spot
        </Link>
        <Link href="/#" className="underline hover:opacity-50">
          Polityka prywatności
        </Link>
      </div>
    </div>
  );
};

export default Footer;
