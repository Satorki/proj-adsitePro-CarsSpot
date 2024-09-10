import Link from "next/link";
import React from "react";

const GalleryHeader = () => {
  return (
    <div className="md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1264px] bg-[var(--backgorundWhite)] mx-auto flex items-end">
      <div className="mt-[80px] flex flex-col gap-6 max-h-[127px] w-[1264px]">
        <div>
          <p className="text-[var(--mainBlue)] font-robotoCondensed text-[21.5px] leading-[32.25px]">
            Prezentacja firmy
          </p>
          <h2 className="text-[var(--textBlackH)] font-bebasNeue text-[40px] leading-[48px]">
            ZOBACZ NASZĄ GALERIĘ ZDJĘĆ
          </h2>
          <p className="hidden mt-[52px]">
            Documenting design decisions, in the form of annotated wireframes,
            gives the developer the necessary information they may need to
            successfully code the project.
          </p>
        </div>
        <div className="flex gap-12">
          <Link
            href={"/"}
            className="font-robotoFlex font-semibold text-[15px] leading-[22.5px] tracking-[-0.02em] text-[var(--mainBlue)] border-b border-b-[var(--mainBlue)]"
          >
            Samochody osobowe
          </Link>
          <Link
            href={"/"}
            className="hover:border-b hover:border-b-[var(--mainBlue)] hover:text-[var(--mainBlue)] font-robotoFlex text-[15px] leading-[22.5px] tracking-[-0.02em]"
          >
            Samochody dostawcze
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;
