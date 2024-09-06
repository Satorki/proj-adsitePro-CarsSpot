import React, { ReactNode } from "react";

interface ButtonProps {
  content: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <button className="w-[158px] h-[47px] gap-[8px] rounded-lg text-[var(--backgroundWhite)] bg-[var(--mainBlue)] size-[15px] hover:bg-blue-500">
      {content}
    </button>
  );
};

export default Button;
