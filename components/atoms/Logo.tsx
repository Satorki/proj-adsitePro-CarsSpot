import React from "react";
import { RxLightningBolt } from "react-icons/rx";

const Logo = () => {
  return (
    <div className="flex">
      <RxLightningBolt className="text-[var(--text-second)]" />
      <div className="font-heebo text-[var(--text-second)]">
        Cars<span className="text-[var(--text-first)]">Spot</span>
      </div>
    </div>
  );
};

export default Logo;
