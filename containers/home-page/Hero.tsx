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
        className="hidden sm:absolute"
        style={{
          zIndex: -2,
          right: 71.95,
          top: 0,
        }}
      />
      <Image
        src={PatterImage}
        alt="pattern image"
        className="sm:hidden"
        fill
        style={{
          zIndex: -2,
        }}
      />

      <HeroText />
    </div>
  );
};

export default Hero;
