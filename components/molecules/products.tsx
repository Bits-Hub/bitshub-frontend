"use client";

import React, { useState } from "react";
import ProductCard from "./cards/productCard";

export default function Products() {
  const [refreshPage, setRefreshPage] = useState(false);
  const images = [
    "/images/products/iphone12.jpg",
    "/images/products/iphone12.jpg",
    "/images/products/iphone15.jpg",
    "/images/products/infinix.jpg",
  ];
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
        {images.map((img, i) => (
          <ProductCard key={i} img={img} />
        ))}
      </div>
      {/* {
        false
    //   loading
       ? (
        // <ProductSkeletons />
      ) : error ? (
        // shadcn toast here
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 grid-cols-2">
          {Array.isArray(products.data) &&
            products.data?.map((item) => {
              return (
                <ProductCard
                //   item={item}
                //   addToCarthandler={addToCarthandler}
                //   key={item?.id}
                />
              );
            })}
        </div>
      )} */}
    </div>
  );
}
