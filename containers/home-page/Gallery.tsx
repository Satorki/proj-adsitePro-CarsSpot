import GalleryHeader from "@/components/molecules/GallleryHeader";
import Slider from "@/components/molecules/Slider";
import React from "react";

const Gallery = () => {
  return (
    <div id="gallery">
      <GalleryHeader />
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Gallery;
