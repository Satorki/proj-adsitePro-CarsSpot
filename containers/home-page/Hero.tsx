"use client";
import HeroText from "@/components/molecules/HeroText";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import PatterImage from "../../public/images/hero-pattern.png";
import HeroGroup from "../../public/images/hero-group.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const parallaxEffect = useTransform(scrollY, [0, 500], [0, -100]);
  // const carHide = useTransform(scrollY, [0, 500], [0, -500]);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 407,
          right: 0,
          zIndex: -1,
        }}
      >
        <Image src={HeroGroup} alt="hero group" />
      </div>
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
