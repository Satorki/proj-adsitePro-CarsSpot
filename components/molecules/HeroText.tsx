import React from "react";
import Button from "../atoms/Button";

const HeroText = () => {
  return (
    <div className="flex flex-col mt-[120px] max-w-[1200px] mx-auto">
      <div>
        <h1 className="text-[76.29px] font-bebasNeue">
          SPRZEDAJEMY SAMOCHODY <br /> Z EUROPY
        </h1>
        <p className="font-robotoCondensed">
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
      </div>
      <div className="flex gap-4">
        <Button content="Zobacz zdjęcia" />
        <Button content="Zadzwoń do nas" />
      </div>
    </div>
  );
};

export default HeroText;
