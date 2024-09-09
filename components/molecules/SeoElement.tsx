import React from "react";
import ArrowDown from "../../public/images/arrowDown.png";
import Image from "next/image";

interface SeoElementProps {
  title: string;
  description: string;
  expand: boolean;
}

const SeoElement = ({ title, description, expand }: SeoElementProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h3 className="uppercase font-bebasNeue font-normal text-[25px] leading-[37.5px] tracking-tight text-white">
        {title}
      </h3>
      <p className="font-robotoCondensed text-[14px] leading-[21px]">
        {description}
      </p>
      <button className="font-robotoCondensed text-[14px] leading-[21px] border-b pb-2 flex items-center gap-1">
        {expand ? "Zwiń" : "Rozwiń"}
        <Image src={ArrowDown} alt="arrow down" width={13} height={15} />
      </button>
    </div>
  );
};

export default SeoElement;
