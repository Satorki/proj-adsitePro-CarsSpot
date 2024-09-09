import React from "react";
import Slide from "../molecules/Slide";

const Slider = () => {
  const Photos = ["Photo2", "Photo1", "Photo3"];

  return (
    <div className="max-w-[1264px] mx-auto flex gap-16 mt-20">
      {Photos.map((photo) => (
        <Slide photo={`/images/${photo}.png`} key={photo} />
      ))}
    </div>
  );
};

export default Slider;
