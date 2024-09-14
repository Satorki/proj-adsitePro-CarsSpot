import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  content: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  hasBorder?: boolean;
  href?: string;
  to?: string;
}

const PhoneCallButton: React.FC<ButtonProps> = ({
  content,
  backgroundColor = "var(--mainBlue)",
  textColor = "var(--backgroundWhite)",
  hasBorder = false,
  href = "/#",
}) => {
  const borderStyle = hasBorder ? "border border-[var(--mainBlue)]" : "";
  return (
    <Link href={href}>
      <button
        style={{ backgroundColor, color: textColor }}
        className={`${borderStyle} hover:shadow-[0_0_1px_2px_var(--mainBlue)] active:shadow-[0_0_0_1px_2px_var(--mainBlue)] w-[158px] h-[47px] flex justify-center  rounded-[var(--buttons-radius)]
      px-[var(--buttons-padding-lr)]  py-[var(--buttons-padding-tb)] transition-all duration-300 ease-in-out `}
      >
        <span className="font-robotoFlex font-normal md:text-[14px]  text-[15px] leading-[22.5px] tracking-[-0.02em]">
          {content}
        </span>
      </button>
    </Link>
  );
};

export default PhoneCallButton;
