import Image from "next/image";
import React from "react";

interface Props {
  photo: string;
}

const Photo: React.FC<Props> = ({ photo }) => {
  return (
    <div className="overflow-hidden">
      <Image
        src={photo}
        alt="photo"
        width={600}
        height={446}
        style={{ objectFit: "cover" }}
        className="hover:scale-110 transform-gpu transition-all ease-in-out  duration-500 object-cover"
      />
    </div>
  );
};

export default Photo;
