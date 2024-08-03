"use client";

import React, { useState } from 'react'
import ProductCard from './cards/productCard';

export default function NewArrivals() {
    const [refreshPage, setRefreshPage] = useState(false);

    const sliderLeft = () => {
        let slider = document.getElementById("slider");
        // slider?.scrollLeft = slider?.scrollLeft - 500;
    };


    const sliderRight = () => {
        let slider = document.getElementById("slider");
        // slider.scrollLeft = slider.scrollLeft + 500;
    };

  return (
    <>
    <div className="w-full relative">

        {/* <MdChevronLeft size={40} className="absolute cursor-pointer -left-14 bottom-32 opacity-50 hover:opacity-100" onClick={sliderLeft} /> */}

        <div id="slider" className="  flex items-center  overflow-x-scroll scroll whitespace-nowrap scroll-smooth  scrollbar-hide ">

            <div className=" flex gap-4 ">
{/* 
                {Array.isArray(categories.data) && categories.data?.map((item) => {
                    return <ProductCard 
                    // item={item}
                        // addToCarthandler={addToCarthandler}
                        // key={item?.id}
                    />;

                })} */}

            </div>

        </div>
        {/* <MdChevronRight size={40} className="absolute cursor-pointer  -right-14 bottom-32 opacity-50 hover:opacity-100" onClick={sliderRight} /> */}

    </div>

</>
  )
}
