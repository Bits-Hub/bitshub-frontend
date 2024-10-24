"use client";

import { Product } from '@/@types';
import ProductCard from '@/components/molecules/cards/productCard';
import Filter from '@/components/molecules/filter';
import { useGetProductsForBuyersQuery } from '@/redux/services/product/productAPIs/productApi';
import React, { useState } from 'react'

export default function Shop() {
    const [showFilter, setShowFilter] = useState(false);
    const [refreshPage, setRefreshPage] = useState(false);
    const [view, setView] = useState("grid");
    const [filterOption, setFilterOption] = useState("");
    const {data: products, isLoading, error} = useGetProductsForBuyersQuery({});

    console.log(products);
    console.log(error);


    const handleFilter = () => {
        setShowFilter(!showFilter);
      };
    
      const handleFilterChange = (value: string) => {
        setFilterOption(value);
      };
  return (
    <div className="">
        {/* use shad cn */}
      {/* <Breadcrumbs page="Shop" /> */}
      <div className="container grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-1 pt-4 pb-16 items-start">
        <div className="hidden lg:block transition duration-300 ">
          <Filter onFilterChange={handleFilterChange} />
        </div>

        <div className="col-span-3">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              <div className="py-2 items-center cursor-pointer relative pr-12">
                <div>
                  <button
                    onClick={() => {
                      handleFilter();
                    }}
                    type="submit"
                    className="lg:hidden bg-primary border border-primary text-white mr-4 px-12 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
                  >
                    {showFilter ? "Close" : "Filter"}
                  </button>
                </div>
                <div
                  className={
                    showFilter
                      ? "absolute w-full left-0 top-full bg-white shadow-md py-3 divide-dashed transition duration-300 visible z-50"
                      : "invisible hidden"
                  }
                >
                  <Filter onFilterChange={handleFilterChange} />
                </div>
              </div>

              <select
                name=""
                id=""
                className="hidden md:block w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
              >
                <option value="">Default sorting</option>
                <option value="">Newly uploaded</option>
                <option value="">Just arrived</option>
                <option value="">Refurblished</option>
                <option value="">Latest products</option>
              </select>
            </div>

            <div className="flex gap-2 ml-auto">
              <div
                className={`w-10 h-9 flex items-center justify-center ${view === "grid"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 border border-gray-300"
                  } rounded cursor-pointer`}
                onClick={() => setView("grid")}
              >
                <i className="fas fa-th"></i>
              </div>
              <div
                className={`  ${view === "flex"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 border border-gray-300"
                  } w-10 h-9 flex items-center justify-center rounded cursor-pointer`}
                onClick={() => setView("flex")}
              >
                <i className="fas fa-list"></i>
              </div>
            </div>
          </div>

          {/* Products */}

          <div className="lg:h-[65vh] h-[60vh] sm:h-[55vh] overflow-y-scroll">
            {isLoading ? (
              // <ShopSkeletons />
              <div>loading...</div>
            ) : error ? (
              // <MessageBox variant="danger">{error}</MessageBox>
              <div>An error occured</div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-3 sm:grid-cols-2">
                {products?.data?.map((item: Product) => {
                  return <ProductCard item={item} key={item?.id} />;
                })}
              </div>
            )}
            {/* {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <div
                className={` ${view === "grid"
                  ? "grid lg:grid-cols-3 gap-3 md:grid-cols-3 sm:grid-cols-2"
                  : "flex flex-col w-[100%]"
                  }`}
              >
                {Array.isArray(products.data) &&
                  products.data?.map((item) => {
                    return (
                      <Product
                        item={item}
                        addToCarthandler={addToCarthandler}
                        key={item?.id}
                      />
                    );
                  })}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}
