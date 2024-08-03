import Image from "next/image";
import React from "react";

const Reviews = () => {

  return (
    <div className="col-span-12 lg:col-span-9 space-y-4 space-x-2 h-full">
      <div className="relative z-10 text-lg font-medium">This page is under construction.</div>
      <div className="relative bottom-1/4 scale-75">
      <Image className="" src="/images/construction.jpeg" width={500} height={500} alt="construction" />
      </div>
    </div>
  );
};

export default Reviews;