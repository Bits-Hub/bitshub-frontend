import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/effect-flip";
// import { Autoplay } from 'swiper/modules';
import Link from 'next/link';

// import required modules
// import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper";

export default function Banner() {
  const backgroundStyle = {
    backgroundImage: "url(/images/gadget1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
    return (
        <div>
            {/* <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper lg:h-[40rem] h-[55rem w-[100vw]"
            > */}
                {/* <SwiperSlide> */}
                    <div
                        style={backgroundStyle}
                    >
                        <div className="container">
                            <h1 className="text-4xl  text-gray-200 font-medium mb-4 capitalize">
                                best collection for <br />
                                durable computers
                            </h1>
                            <p className='text-gray-200 text-sm'>
                            Explore our top-rated selection of high-performance and, {" "}
                                <br /> long-lasting computers.
                            </p>
                            <div className="mt-12 ">
                                <Link
                                    href="/shop"
                                    className="bg-primary border border-primary text-white px-6 py-2 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                {/* </SwiperSlide> */}
{/* this was commented out in the old code */}
                {/* <SwiperSlide className="bg-black flex  items-center flex-col justify-center lg:pb-0">
        <div className=" h-[77vh] lg:h-[65vh] overflow-hidden">
          <div className=" text-center  relative top-16 ">
            <p className="text-red-800 text-1xl mb-3 lg:text-2xl lg:mb-4">
              New
            </p>
            <h1 className="text-white text-4xl mb-3 lg:text-5xl lg:mb-8">
              MacBook Pro 13
            </h1>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
          <div>
            <img
              className=" lg:h-[50vh] lg:w-[50vw] mb-0 h-[50vh] w-[100%] "
              src="https://w0.peakpx.com/wallpaper/601/760/HD-wallpaper-apple-macbook-laptop-on-black-background-modern-technology-laptop-apple.jpg"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide> */}
            {/* </Swiper> */}
        </div>
    )
}
