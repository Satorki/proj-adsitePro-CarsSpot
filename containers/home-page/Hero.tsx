"use client";
import HeroText from "@/components/molecules/HeroText";
import Image from "next/image";
import React from "react";
import PatterImage from "../../public/images/hero-pattern.png";
import HeroGroup from "../../public/images/hero-group.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const parallaxEffect = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <div>
      <Image
        src={HeroGroup}
        alt="hero group"
        className="absolute"
        style={{
          top: 407,
          right: 0,
          zIndex: -1,
        }}
      />
      {/* <Image
        src={PatterImage}
        alt="pattern image"
        width={668.05}
        height={659}
        className="absolute -z-10 hidden md:block"
        style={{
          right: 71.95,
        }}
      /> */}

      <motion.div
        style={{
          y: parallaxEffect,
          position: "absolute",
          right: 71.95,
          top: 0,
          zIndex: -2,
        }}
        className="hidden md:block"
      >
        <Image src={PatterImage} alt="pattern image" />
      </motion.div>
      <motion.div
        style={{
          y: parallaxEffect,
          position: "absolute",
          top: 0,
          zIndex: -2,
          height: "100vh",
        }}
        className="block md:hidden"
      >
        <Image
          src={PatterImage}
          alt="pattern image"
          style={{ width: "100%", height: "130%" }}
        />
      </motion.div>
      <HeroText />
    </div>
  );
};

export default Hero;
