import React, { ReactNode } from "react";

interface CustomBackgroundProps {
  children: ReactNode;
}

const CustomBackground = ({ children }: CustomBackgroundProps) => {
  return (
    <div className="bg-[var(--mainBlack)] text-[#ffffff] py-[88px]">
      {children}
    </div>
  );
};

export default CustomBackground;
