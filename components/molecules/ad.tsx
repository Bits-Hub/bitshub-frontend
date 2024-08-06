import Image from "next/image";
import React from "react";

export default function Ad() {
  return (
    <div className="container pb-16">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <a href="advert">
              <Image
                height={250}
                width={250}
                className="h-[250px] w-full"
                src="/images/ad1.webp"
                alt=""
              />
            </a>
          </div>
          {/* <div className="carousel-item active relative float-left w-full">
            <a href="advert">
              <img className="h-[250px] w-full" src="../assets/ad1.webp" alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
