import React from "react";
import ArrowDown from "../../public/images/arrowDown.png";
import Image from "next/image";

type Props = {
  expand: boolean;
};

const ExpandButton = ({ expand }: Props = { expand: false }) => {
  return (
    <div>
      <button className="border-b font-robotoCondensed text-[14px] leading-[21px]  flex items-center gap-1 pb-1 hover:pb-2 transition-all duration-300 ease-in-out">
        {expand ? "Zwiń" : "Rozwiń"}
        <Image src={ArrowDown} alt="arrow down" width={13} height={15} />
      </button>
    </div>
  );
};

export default ExpandButton;
