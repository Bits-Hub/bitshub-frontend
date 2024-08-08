import React from "react";
import CategoryCard from "./cards/categoryCard";
import ProductCard from "./cards/productCard";
import { categories } from "@/lib/data/categoryData";
export default function Categories() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 text-white gap-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          items={category.items}
        />
      ))}
      {/* <div
        //     key={i}
        //     className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md"
        //   >
        //     <a href="#">
        //       <img
        //         className="h-48 rounded-t-lg object-cover mx-auto"
        //         src={img}
        //         alt="product image"
        //       />
        //     </a>
        //     {i % 2 == 0 && (
        //       <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-orange-500 text-center text-[11px] text-white">
        //         15% OFF
        //       </span>
        //     )}
        //     <div className="mt-2 px-5 pb-5">
        //       <a href="#">
        //         <h5 className="text-md font-semibold tracking-tight text-slate-900 hover:text-orange-700">
        //           Acer PRO Rog book
        //         </h5>
        //       </a>
        //       <div className="mt-2.5 mb-3 flex items-center">
        //         <span className="mr-2 rounded bg-orange-400 text-white px-2.5 py-0.5 text-[12px] font-semibold">
        //           5.0
        //         </span>
        //         <svg
        //           aria-hidden="true"
        //           className="h-4 w-4 text-orange-400"
        //           fill="currentColor"
        //           viewBox="0 0 20 20"
        //           xmlns="http://www.w3.org/2000/svg"
        //         >
        //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        //         </svg>
        //         <svg
        //           aria-hidden="true"
        //           className="h-4 w-4 text-orange-400"
        //           fill="currentColor"
        //           viewBox="0 0 20 20"
        //           xmlns="http://www.w3.org/2000/svg"
        //         >
        //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        //         </svg>
        //         <svg
        //           aria-hidden="true"
        //           className="h-4 w-4 text-orange-400"
        //           fill="currentColor"
        //           viewBox="0 0 20 20"
        //           xmlns="http://www.w3.org/2000/svg"
        //         >
        //           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        //         </svg>
        //       </div>
        //       <div className="flex flex-col justify-between">
        //         <p>
        //           <span className="text-2xl font-bold text-slate-700">
        //             $249
        //           </span>
        //           <span className="text-sm text-slate-400 line-through">
        //             $299
        //           </span>
        //         </p>
        //         <a
        //           href="#"
        //           className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        //         >
        //           <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             className="mr-2 h-6 w-6"
        //             fill="none"
        //             viewBox="0 0 24 24"
        //             stroke="currentColor"
        //             stroke-width="2"
        //           >
        //             <path
        //               stroke-linecap="round"
        //               stroke-linejoin="round"
        //               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        //             />
        //           </svg>
        //           Add to cart
        //         </a>
        //       </div>
        //     </div>
        //   </div> */}
      {/* {
    // loading
        false
    ? (
    //   <CategorySkeletons />
    // shadcn skeletons here
    ) :
    // error
     ? (
    //   <MessageBox variant="danger">{error}</MessageBox>
    // toast error here
    ) : (
    //   <div classNameName="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-2">
    //     {categories?.data?.map((item) => {
    //       return <CategoryCard item={item} key={item.id} />;
    //     })}
    //   </div>
    )} */}
    </div>
  );
}
