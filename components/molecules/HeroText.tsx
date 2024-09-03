import React from "react";
import Button from "../atoms/Button";

const HeroText = () => {
  return (
    <div>
      <div>
        <h1>SPRZEDAJEMY SAMOCHODY Z EUROPY</h1>
        <p>
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
      </div>
      <div>
        <Button content="Zobacz zdjęcia" />
        <Button content="Zadzwoń do nas" />
      </div>
    </div>
  );
};

export default HeroText;
