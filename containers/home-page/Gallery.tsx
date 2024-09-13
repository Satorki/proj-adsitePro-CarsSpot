"use client";
import GalleryHeader from "@/components/molecules/GallleryHeader";
import Slider from "@/components/molecules/Slider";
import React, { useState } from "react";

const Gallery = () => {
  const [currentGallery, setCurrentGallery] = useState(0);

  return (
    <div id="gallery">
      <GalleryHeader
        setCurrentGallery={setCurrentGallery}
        currentGallery={currentGallery}
      />
      <div>
        <Slider currentGallery={currentGallery} />
      </div>
    </div>
  );
};

export default Gallery;
