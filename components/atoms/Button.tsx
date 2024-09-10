import React, { ReactNode } from "react";

interface ButtonProps {
  content: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  hasBorder?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  content,
  backgroundColor = "var(--mainBlue)",
  textColor = "var(--backgroundWhite)",
  hasBorder = false,
}) => {
  const borderStyle = hasBorder ? "border border-[var(--mainBlue)]" : "";
  return (
    <button
      style={{ backgroundColor, color: textColor }}
      className={`${borderStyle}  w-[158px] h-[47px] flex justify-center  rounded-[var(--buttons-radius)]
      px-[var(--buttons-padding-lr)] py-[var(--buttons-padding-tb)] hover:bg-blue-600`}
    >
      <span className="font-robotoFlex font-normal text-[15px] leading-[22.5px] tracking-[-0.02em]">
        {content}
      </span>
    </button>
  );
};

export default Button;
