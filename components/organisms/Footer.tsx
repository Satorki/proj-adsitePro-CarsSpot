import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[var(--mainBlack)] text-white py-6 border-t  border-white">
      <div className="md:max-w-[700px] lg:max-w-[960px] xl:max-w-[var(--container-width)] flex mx-auto  justify-between">
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
