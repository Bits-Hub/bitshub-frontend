"use client"

import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteFromWishlist, fetchWishlist } from "../actions/wishlistAction";
const WishListCard = (props: {item: {
    product_details: {
        name: string;
        product_variants: {
        status: string;
        }
    }
}}) => {
  const { item } = props;
//   const dispatch = useDispatch();

  // 
//   const deleteFromWishlistHandler = () => {
//     dispatch(deleteFromWishlist({ product_id: item.id }))
//   };

  return (
    <div className="border py-[1rem]  h-[20rem] md:h-fit md:flex-row rounded-md  px-[1rem] flex flex-col justify-between md:items-center">
      <div>
        {/* <img
          src={item?.product_details?.product_variants?.img_urls[0]}
          alt="img"
          className="w-24 h-24"
        /> */}
      </div>
      <div>
        <h1 className="text-xl font-bold text-slate-700">
          {item?.product_details.name}
        </h1>
        <p className="mt-[.2rem] text-[15px]">
          Availability:
          {item?.product_details?.product_variants?.status === "ACTIVE" ? (
            <span className="text-green-500">In Stock</span>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </p>
      </div>
      <div className="md:flex md:items-center">
        <div className="mt-[1rem] flex flex-row justify-between ">
          <button className="border h-fit px-4 text-[16px] py-2 rounded-md bg-primary border-primary text-white hover:bg-transparent hover:text-primary transition">
            {/* <i className="fas fa-shopping-bag"></i> */}
            <i className="fa fa-cart-plus mr-3 " aria-hidden="true"></i>
            Add to cart
          </button>
          {/* <button className="md:ml-4 hover:text-primary" onClick={deleteFromWishlistHandler}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default WishListCard;