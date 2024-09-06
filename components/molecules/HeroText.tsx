import React from "react";
import Button from "../atoms/ButtonBlue";

const HeroText = () => {
  return (
    <div className="flex flex-col pt-[120px] pb-[362px] max-w-[1200px] mx-auto gap-12">
      <div>
        <h1 className="text-[76.29px] font-bebasNeue font-normal leading-[83.92px]">
          SPRZEDAJEMY SAMOCHODY <br /> Z EUROPY
        </h1>
        <p className="font-robotoCondensed mt-8">
          Kup komfortowy pojazd, aby każda podróż <br />
          była wyjątkowym przeżyciem.
        </p>
      </div>
      <div className="flex gap-6">
        <Button content="Zobacz zdjęcia" />
        <button className="w-[158px] h-[47px] gap-[8px] rounded-lg text-[var(--second-blue)] border-[var(--second-blue)] border size-[15px] hover:bg-blue-200">Zadzwoń do nas</button>
      </div>
    </div>
  );
};

export default HeroText;
