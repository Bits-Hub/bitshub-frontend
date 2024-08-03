"use client";
import React from 'react'
import ProductCard from '../cards/productCard';

export default function Electronics() {
    const slideLeft = () => {
        let slide = document.getElementById("slide");
        // slide.scrollLeft = slide.scrollLeft - 500;
    };


    const slideRight = () => {
        let slide = document.getElementById("slide");
        // slide.scrollLeft = slide.scrollLeft + 500;
    };

    return (
        <div>
            <div className="w-full relative">
                Electronics

                {/* <MdChevronLeft size={40} className="absolute cursor-pointer -left-14 bottom-32 opacity-50 hover:opacity-100" onClick={slideLeft} /> */}

                <div id="slide" className="  flex items-center  overflow-x-scroll scroll whitespace-nowrap scroll-smooth  scrollbar-hide ">

                    <div className=" flex gap-4 ">

                        {/* {Array.isArray(categories.data) && categories.data?.map((item) => {
                            return <ProductCard item={item} key={item?.id} />;

                        })} */}

                    </div>

                </div>
                {/* <MdChevronRight size={40} className="absolute cursor-pointer -right-14 bottom-32 opacity-50 hover:opacity-100" onClick={slideRight} /> */}

            </div>

        </div>
    )
}
