import HeroText from "@/components/molecules/HeroText";
import Image from "next/image";
import React from "react";
import HeroImage from "../../public/images/hero-cars.png";
import ShadowImge from "../../public/images/hero-shadow.png";
import PatterImage from "../../public/images/hero-pattern.png";
import Square from "@/components/atoms/Square";

const Hero = () => {
  const isSmallScreen = window.innerWidth < 1024;

  return (
    <div>
      <Image
        src={PatterImage}
        alt="pattern image"
        width={668.05}
        height={659}
        style={{
          position: "absolute",
          zIndex: -1,
          right: 71.95,
          top: 0,
          objectFit: "cover",
        }}
      />
      <Square />
      <HeroText />

      {isSmallScreen ? (
        <Image
          src={HeroImage}
          alt="hero image"
          width={1065}
          height={406}
          style={{
            zIndex: -1,
            objectFit: "cover",
          }}
        />
      ) : (
        <Image
          src={HeroImage}
          alt="hero image"
          width={1065}
          height={406}
          style={{
            position: "absolute",
            zIndex: -1,
            right: 0,
            top: 407,
          }}
        />
      )}

      <Image
        src={ShadowImge}
        alt="shadow image"
        width={1064}
        height={405}
        style={{
          position: "absolute",
          zIndex: -1,
          right: 0,
          top: 407,
        }}
      />
    </div>
  );
};

export default Hero;
