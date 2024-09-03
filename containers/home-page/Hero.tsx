import HeroText from "@/components/molecules/HeroText";
import Image from "next/image";
import React from "react";
import HeroImage from "../../public/images/Hero.png";

const Hero = () => {
  return (
    <>
      <HeroText />
      <div className="hero-container relative w-full overflow-hidden right-0">
        <Image
          src={HeroImage}
          alt="hero image"
          style={{
            position: "absolute",
            objectFit: "cover",
            zIndex: -1,
            right: 0,
          }}
        />
      </div>
    </>
  );
};

export default Hero;
