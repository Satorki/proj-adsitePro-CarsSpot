import React from "react";
import ArrowDown from "../../public/images/arrowDown.png";
import Image from "next/image";

interface Props {
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  expand: boolean;
}

const ExpandButton = ({ expand, setExpand }: Props) => {
  return (
    <div>
      <button
        onClick={() => {
          setExpand(!expand);
        }}
        className="border-b font-robotoCondensed text-[14px] leading-[21px] flex items-center gap-1 pb-1 hover:pb-2 transition-all duration-300 ease-in-out group"
      >
        {expand ? "Zwiń" : "Rozwiń"}
        <Image
          src={ArrowDown}
          alt="arrow down"
          width={13}
          height={15}
          className={`${
            expand ? "rotate-180" : ""
          } group-hover:rotate-90 transition-all duration-300 ease-in`}
        />
      </button>
    </div>
  );
};

export default ExpandButton;
