"use client";

import React, { useState } from "react";
import ProductCard from "./cards/productCard";
import { useGetProductsForBuyersQuery } from "@/redux/services/product/productAPIs/productApi";
import { Product } from "@/@types";

export default function Products() {
  const [refreshPage, setRefreshPage] = useState(false);
  const {data: products, isLoading, error} = useGetProductsForBuyersQuery({});
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
        {products.data.map((item: Product) => (
          <ProductCard key={item.id} item={item} />
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
