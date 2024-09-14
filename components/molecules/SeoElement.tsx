import React, { useState } from "react";
import ExpandButton from "../atoms/ExpandButton";

interface SeoElementProps {
  title: string;
  description: string;
  descritpionPlus: string;
}

const SeoElement = ({
  title,
  description,
  descritpionPlus,
}: SeoElementProps) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4">
      <h3 className="uppercase font-bebasNeue text-[25px] leading-[37.5px] tracking-[-0.03em] text-white">
        {title}
      </h3>
      <div className="flex flex-col gap-6">
        <p className="font-robotoCondensed text-[14px] text-white leading-[21px]">
          {description}
          <span
            className={`transition-all duration-500 ease-in-out ${
              expand ? "opacity-0 max-w-0" : "opacity-100 max-w-full"
            }`}
          >
            [...]
          </span>
          <span
            className={`inline-block transition-all duration-300 ease-in-out overflow-hidden ${
              expand ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            {descritpionPlus}
          </span>
        </p>
        <ExpandButton expand={expand} setExpand={setExpand} />
      </div>
    </div>
  );
};

export default SeoElement;
