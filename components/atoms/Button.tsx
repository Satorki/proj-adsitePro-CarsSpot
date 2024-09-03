import React, { ReactNode } from "react";

interface ButtonProps {
  content: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <button className="w-[158px] h-[47px] gap-[8px] rounded text-[var(--third-white)] bg-[var(--second-blue)] size-[15px]">
      {content}
    </button>
  );
};

export default Button;
