import React, { ReactNode } from "react";

interface ButtonProps {
  content: ReactNode;
  backgroundColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  content,
  backgroundColor = "var(--mainBlue)",
  textColor = "var(--backgroundWhite)",
}) => {
  return (
    <button
      style={{ backgroundColor, color: textColor }}
      className="w-[158px] h-[47px] rounded-[var(--buttons-radius)]
      px-[var(--buttons-padding-lr)] py-[var(--buttons-padding-tb)] hover:bg-blue-600"
    >
      <span className="w-[110px] font-robotoFlex font-semibold text-[15px] leading-[22.5px] tracking-[-0.02em]">
      {content}
      </span>
    </button>
  );
};

export default Button;
