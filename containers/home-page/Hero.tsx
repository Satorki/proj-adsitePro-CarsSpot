import HeroText from "@/components/molecules/HeroText";
import Image from "next/image";
import React from "react";
import HeroImage from "../../public/images/hero-cars.png";
import ShadowImge from "../../public/images/hero-shadow.png";
import PatterImage from "../../public/images/hero-pattern.png";

const Hero = () => {
  return (
    <>
      <HeroText />
      <Image
        src={PatterImage}
        alt="pattern image"
        style={{
          position: "absolute",
          zIndex: -1,
          right: 71.95,
          top: 0,
          objectFit: "cover",
        }}
      />
        <Image
          src={HeroImage}
          alt="hero image"
          style={{
            position: "absolute",
            objectFit: "cover",
            zIndex: -1,
            right: 0,
            top: 328,
          }}
        />
        <Image
          src={ShadowImge}
          alt="shadow image"
          style={{
            position: "absolute",
            objectFit: "cover",
            zIndex: -1,
            right: 0,
            top: 328,
          }}
        />
    </>
  );
};

export default Hero;
