import Link from "next/link";
import React, { useState } from "react";

interface Props {
  setCurrentGallery: (index: number) => void;
  currentGallery: number;
  title: string;
}

const GalleryHeader = ({ setCurrentGallery, currentGallery, title }: Props) => {
  return (
    <div className="mx-5 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1264px] bg-[var(--backgorundWhite)] sm:mx-auto flex items-end">
      <div className="sm:mt-[80px] flex flex-col gap-6 max-h-[127px] w-[1264px]">
        <div>
          <p className="text-[var(--mainBlue)] font-robotoCondensed text-[21.5px] leading-[32.25px]">
            Prezentacja firmy
          </p>
          <h2 className="text-[var(--textBlackH)] font-bebasNeue text-[40px] leading-[48px]">
            {title}
          </h2>
          <p className="hidden mt-[52px]">
            Documenting design decisions, in the form of annotated wireframes,
            gives the developer the necessary information they may need to
            successfully code the project.
          </p>
        </div>
        <div className="flex gap-12">
          <button
            onClick={() => setCurrentGallery(0)}
            className={`hover:border-b hover:border-b-[var(--mainBlue)] hover:text-[var(--mainBlue)] font-robotoFlex  text-[15px] leading-[22.5px] tracking-[-0.02em]  ${
              currentGallery === 0 &&
              "text-[var(--mainBlue)] font-semibold border-b border-b-[var(--mainBlue)]"
            }`}
          >
            Samochody osobowe
          </button>
          <button
            onClick={() => setCurrentGallery(1)}
            className={`hover:border-b hover:border-b-[var(--mainBlue)] hover:text-[var(--mainBlue)] font-robotoFlex text-[15px] leading-[22.5px] tracking-[-0.02em] ${
              currentGallery === 1 &&
              "text-[var(--mainBlue)] font-semibold border-b border-b-[var(--mainBlue)]"
            }`}
          >
            Samochody dostawcze
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;
