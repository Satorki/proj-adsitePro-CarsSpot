import Link from "next/link";
import React, { ReactNode } from "react";
import { Link as ScrollLink } from "react-scroll";

interface ButtonProps {
  content: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  hasBorder?: boolean;
  href?: string;
  to?: string;
}

const MainButton: React.FC<ButtonProps> = ({
  content,
  backgroundColor = "var(--mainBlue)",
  textColor = "var(--backgroundWhite)",
  hasBorder = false,
  href = "/#",
  to = "/",
}) => {
  const borderStyle = hasBorder ? "border border-[var(--mainBlue)]" : "";
  return (
    <ScrollLink to={to} offset={-79} href={href}>
      <button
        style={{ backgroundColor, color: textColor }}
        className={`${borderStyle} hover:shadow-[0_0_1px_2px_var(--mainBlue)] active:shadow-[0_0_0_1px_2px_var(--mainBlue)] flex justify-center  rounded-[var(--buttons-radius)] px-3 py-2 sm:px-4  sm:py-3 
      lg:px-[var(--buttons-padding-lr)]  lg:py-[var(--buttons-padding-tb)] transition-all duration-300 ease-in-out `}
      >
        <span className="font-robotoFlex font-semibold text-[15px] leading-[22.5px] tracking-[-0.02em]">
          {content}
        </span>
      </button>
    </ScrollLink>
  );
};

export default MainButton;
