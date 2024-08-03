import Link from 'next/link';
import React from 'react'
import Rating from './rating';

export default function ProductCard(
    // props
) {
    // const product = { id: item.id, quantity: 1 };
  return (
    <div>
    <div className="bg-white rounded shadow overflow-hidden group">
      <div className="relative" style={{ height: "150px" }}>
        <div className="border w-[100%] h-[150px] overflow-hidden">
          {/* <LazyLoadImage
            src={item.img_url}
            style={{ width: "100%", height: "100%" }}
            effect="blur"
            alt="productImage"
          /> */}
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <Link
            href="/shop"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          >
            <i className="fas fa-search"></i>
          </Link>
          <span
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center
            hover:bg-gray-800 transition"
          >
            <i className="far fa-heart"></i>
          </span>
          <p className="text-sm text-white font-medium">
            {/* {item?.store?.brand_name} */}
            brand name
          </p>
        </div>
      </div>
      <div
        className="pt-4 pb-3 px-4"
        style={{
          height: "140px",
        }} /*remove height after summary cut is implemented*/
      >
        <Link href={
            // `/product-details/${item.slug}`
            ''
        }>
          <p className="uppercase font-medium text-l text-gray-800 hover:text-primary transition">
            {/* {item.name} */}
            item name
          </p>
        </Link>
        <p className="text-xs text-gray-500 mb-2">
          {/* {item.description.slice(0, 33)} ... */}
          item description...
        </p>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
          <p className="text-l text-primary font-semibold">
            {/* ₦{item.amount} */}
            price
            </p>
        </div>
        <div>
          <Rating 
        //   rating={item?.rating} 
        //   reviews={item?.views}
           />
        </div>
      </div>
{/* use shadcn btn */}
      {/* <Button
        className="block w-full border border-primary rounded-none rounded-b px-8 py-2 font-medium"
        primary
        onClick={() => {
          props.addToCarthandler(product);
        }}
      >
        Add to cart
      </Button> */}
    </div>
  </div>
  )
}
