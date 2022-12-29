import Image from "next/image";
import React, { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 shadow-md py-5 px-5 md:px-10">
      <div className="relative flex items-center my-auto h-10 cursor-pointer">
        <Image
          src={"https://links.papareact.com/qd3"}
          fill
          className="object-contain object-left"
          alt="AirBNB logo image"
        />
      </div>
      {/* <div></div>
      <div></div> */}
    </header>
  );
};

export default Header;
