import Image from "next/image";
import React, { FC } from "react";

const LargeCard: FC<{
  img: string;
  title: string;
  description: string;
  btnTxt: string;
}> = ({ img, title, description, btnTxt }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          fill
          className="object-cover rounded-2xl"
          alt={description}
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-3xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {btnTxt}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
