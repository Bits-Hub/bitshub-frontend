"use client";

import { Cart } from "@/@types";
import Image from "next/image";
import { useState } from "react";

export default function CartCard({item,
   handleDelete,
   quantity,
  updateQuantity,
  }: {
    item: Cart; 
    handleDelete: () => void;
    quantity: number;
    updateQuantity: (quantity: number) => void;
  }) {
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10);
      updateQuantity(isNaN(value) ? 1 : value);
    };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 border border-gray-200 rounded">
      <div className="w-28 md:w-32 flex-shrink-0">
        <Image
          src={item?.variant_img_url}
          alt={item?.product_details?.name}
          className="w-full"
        />
      </div>
      <div className="md:w-1/3">
        <p className="text-gray-800 text-base font-medium capitalize">
          {item?.product_details?.name}
        </p>
        <p className="text-gray-500 text-sm">
          Price:{" "}
          <span className="text-primary font-semibold">
            ₦{item.amount?.toLocaleString()}
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max rounded-md overflow-hidden">
          <button
            disabled={quantity <= 1}
            className="px-3 py-1.5 flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={() => updateQuantity(quantity - 1)}
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 10h6a1 1 0 110 2H7a1 1 0 110-2z" />
            </svg>
          </button>
          <input
            className="h-8 text-base p-2 w-20 ring-0 border-0 focus:border-0 focus:ring-0 bg-white text-center font-medium"
            value={quantity}
            onChange={handleQuantityChange}
            type="number"
          />

          <button
            className="px-3 py-1.5 flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={() => updateQuantity(quantity + 1)}
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M17 9a1 1 0 01-1 1h-4v4a1 1 0 11-2 0v-4H4a1 1 0 110-2h6V4a1 1 0 112 0v4h4a1 1 0 011 1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 mt-4 md:mt-0">
          <p className="text-primary text-lg font-semibold w-24">
            ₦{(Number(item.amount) * quantity).toLocaleString()}
          </p>
          <div
            className="text-gray-600 cursor-pointer hover:text-primary"
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
