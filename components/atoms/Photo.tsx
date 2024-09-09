import Image from "next/image";
import React from "react";

interface Props {
  photo: string;
}

const Photo: React.FC<Props> = ({ photo }) => {
  return (
    <div>
      <Image
        src={photo}
        alt="photo"
        width={600}
        height={446}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Photo;
