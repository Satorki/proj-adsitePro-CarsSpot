import React, { ReactNode } from "react";

interface SeoBackgroundProps {
  children: ReactNode;
}

const SeoBackground = ({ children }: SeoBackgroundProps) => {
  return (
    <div className="bg-[var(--mainBlack)] text-[#ffffff] py-[88px]">
      {children}
    </div>
  );
};

export default SeoBackground;
