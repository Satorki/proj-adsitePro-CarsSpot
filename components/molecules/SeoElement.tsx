import React from "react";
import ExpandButton from "../atoms/ExpandButton";

interface SeoElementProps {
  title: string;
  description: string;
  expand: boolean;
}

const SeoElement = ({ title, description, expand }: SeoElementProps) => {
  return (
    <div className="flex flex-col  items-start gap-4">
      <h3 className="uppercase font-bebasNeue text-[25px] leading-[37.5px] tracking-[-0.03em] text-white">
        {title}
      </h3>
      <div className="flex flex-col gap-6">
        <p className="font-robotoCondensed text-[14px] text-white leading-[21px]">
          {description}
        </p>
        <ExpandButton expand={expand} />
      </div>
    </div>
  );
};

export default SeoElement;
