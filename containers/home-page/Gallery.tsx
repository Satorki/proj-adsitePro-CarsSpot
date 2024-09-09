import Headers from "@/components/molecules/Headers";
import Slider from "@/components/organisms/Slider";
import React from "react";

const Gallery = () => {
  return (
    <div className="bg-[var(--backgorundWhite)]">
      <Headers />
      <div className="h-[678px]">
        <Slider />
      </div>
    </div>
  );
};

export default Gallery;
