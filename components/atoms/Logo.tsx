import Image from "next/image";
import React from "react";
import logo from "../../public/images/Logo.png";
//import { RxLightningBolt } from "react-icons/rx";

const Logo = () => {
  return (
    // <div className="flex gap-[12px] text-[--second-blue] h-[32.61px] font-bold items-center">
    //   <RxLightningBolt  className="text-[29.58px]"/>
    //   <div className="font-heebo text-[28px]">
    //     Cars<span className="text-[var(--first-black)]">Spot</span>
    //   </div>
    // </div>
    <div>
      <Image src={logo} alt="navbar logo" width={152.79} height={32.61} />
    </div>
  );
};

export default Logo;
