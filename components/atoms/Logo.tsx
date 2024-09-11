import Image from "next/image";
import React from "react";
import LogoName from "../../public/images/LogoName.png";
import LogoSymbol from "../../public/images/LogoSymbol.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className="max-w-max md:w-[150px] flex gap-3 lg:w-[300px] h-[25px] sm:h-[29.58px]">
          <Image
            src={LogoSymbol}
            alt="navbar logo symbol"
            width={25.6}
            height={28}
          />
          <div className="pt-[3.82px]">
            <Image
              src={LogoName}
              alt="navbar logo"
              width={115.19}
              height={29.58}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
