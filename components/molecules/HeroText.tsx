import React from "react";
import Button from "../atoms/Button";

const HeroText = () => {
  return (
    <div className="md:max-w-[700px] lg:max-w-[960px] xl:max-w-[var(--container-width)] flex flex-col mt-[120px] mb-[362px] mx-auto gap-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-[var(--mainBlack)] text-[76.29px] font-bebasNeue leading-[83.92px] tracking-[-0.04em] max-w-[1120px] h-[168px]">
          SPRZEDAJEMY SAMOCHODY <br /> Z EUROPY
        </h1>
        <p className="text-[var(--mainBlack)] font-robotoCondensed w-[602px] h-[48px] leading-6">
          Kup komfortowy pojazd, aby każda podróż <br />
          była wyjątkowym przeżyciem.
        </p>
      </div>
      <div className="flex gap-6">
        <Button content="Zobacz zdjęcia" />
        <Button
          content="Zadzwoń do nas"
          backgroundColor="var(--backgroundWhite)"
          textColor="var(--mainBlue)"
          hasBorder
        />
      </div>
    </div>
  );
};

export default HeroText;
