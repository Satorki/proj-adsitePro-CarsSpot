import HeroText from "@/components/molecules/HeroText";
import Image from "next/image";
import React from "react";
import PatterImage from "../../public/images/hero-pattern.png";
import HeroGroup from "../../public/images/hero-group.png";

const Hero = () => {
  return (
    <div className="">
      <Image
        src={HeroGroup}
        alt="hero group"
        style={{
          position: "absolute",
          top: 407,
          right: 0,
          zIndex: -1,
        }}
      />
      <Image
        src={PatterImage}
        alt="pattern image"
        width={668.05}
        height={659}
        className="absolute -z-10 top-0 hidden md:block"
        style={{
          right: 71.95,
        }}
      />
      <Image
        src={PatterImage}
        alt="pattern image"
        fill
        className="-z-10 block md:hidden"
      />
      <HeroText />
    </div>
  );
};

export default Hero;
