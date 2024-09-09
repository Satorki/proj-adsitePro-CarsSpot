import Image from "next/image";
import React from "react";

interface Props {
  photo: string;
}

const Photo: React.FC<Props> = ({ photo }) => {
  return (
    <div className="w-[600px] h-[446px]">
      <Image src={photo} alt="photo" width={600} height={446} />
    </div>
  );
};

export default Photo;
