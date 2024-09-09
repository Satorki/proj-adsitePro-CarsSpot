import Link from "next/link";
import React from "react";

const GalleryHeader = () => {
  return (
    <div className="h-[207px] bg-[var(--backgorundWhite)] max-w-[1264px] mx-auto flex items-end">
      <div className="flex flex-col gap-6 max-h-[127px] ">
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
            className="text-[var(--mainBlue)] border-b border-b-[var(--mainBlue)]"
          >
            Samochody osobowe
          </Link>
          <Link href={"/"}>Samochody dostawcze</Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryHeader;
