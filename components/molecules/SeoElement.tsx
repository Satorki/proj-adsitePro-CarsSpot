import React, { useState } from "react";
import ExpandButton from "../atoms/ExpandButton";
import { TextEffect } from "../atoms/TextEffect";
import { motion } from "framer-motion";

interface SeoElementProps {
  title: string;
  description: string;
}

const SeoElement = ({ title, description }: SeoElementProps) => {
  const [expand, setExpand] = useState(false);
  const descriptionShortLenght = 180;

  return (
    <div style={{ flex: 1 }} className="flex flex-col items-start gap-4">
      <h3 className="uppercase font-bebasNeue text-[25px] leading-[37.5px] tracking-[-0.03em] text-white">
        {title}
      </h3>
      <div className="flex flex-col gap-6">
        <p className="font-robotoCondensed text-[14px] text-white leading-[21px]">
          {description.length > descriptionShortLenght && !expand ? (
            <>
              {description.slice(0, descriptionShortLenght)}
              <motion.span
                initial={{ opacity: 0, display: "inline" }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 1 }}
              >
                {" "}
                [...]
              </motion.span>

              <motion.span
                initial={{ opacity: 1 }}
                animate={{
                  opacity: 0,
                  transitionEnd: {
                    display: "none",
                  },
                }}
                transition={{ duration: 1 }}
              >
                {description.slice(descriptionShortLenght)}
              </motion.span>
            </>
          ) : (
            <>
              {description.slice(0, descriptionShortLenght)}
              <TextEffect per="word" preset="blur" className="inline">
                {description.slice(descriptionShortLenght)}
              </TextEffect>
            </>
          )}
        </p>
        <ExpandButton expand={expand} setExpand={setExpand} />
      </div>
    </div>
  );
};

export default SeoElement;
