import Link from "next/link";
import React from "react";
import Rating from "./rating";
import { Button } from "@/components/atoms/ui/button";
import { Product } from "@/@types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAddToCartMutation } from "@/redux/services/cart/cartApi";
import { toast } from "sonner";
export default function ProductCard({ item }: {item: Product}) {
  const router = useRouter();
  const [addToCart, {error: AddtoCartError, isSuccess, isLoading}] = useAddToCartMutation();
  const handleAddToCart = async () => {
    toast.loading("Adding to cart");
    try {
      const res = await addToCart({product_id: item?.id, quantity: 1});
      if (res.data) {
        console.log("added to cart", res.data);
      }
      toast.dismiss();
      toast.success("Product added to cart");
    } catch (error: any) {
      console.log(error);
      toast.dismiss();
      toast.error("An error occurred");
    }
  }
  return (
    <div>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-48 w-full">
          <div 
          onClick={()=> {
            router.push(`/product-details?id=${item?.id}`)
          }}
          >
            <Image
              width={200}
              height={200}
              className="mx-auto h-full"
              src={item?.img}
              alt="this is a product"
            />
          </div>
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-orange-500 text-white px-2.5 py-0.5 text-xs font-medium">
              {" "}
              Up to 35% off{" "}
            </span>

            <div className="flex items-center justify-end gap-1">
              <Button
                type="button"
                data-tooltip-target="tooltip-quick-look"
                className="rounded-lg bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only text-black"> Quick look </span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Button>
              <div
                id="tooltip-quick-look"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
              >
                Quick look
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>

              <Button
                type="button"
                data-tooltip-target="tooltip-add-to-favorites"
                className="rounded-lg p-2 text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only"> Add to Favorites </span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  />
                </svg>
              </Button>
              <div
                id="tooltip-add-to-favorites"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
              >
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow=""></div>
              </div>
            </div>
          </div>

          <div
            onClick={()=> {
              router.push(`/product-details?id=${item?.id}`)
            }}
            className="text-lg font-[500] leading-tight text-gray-900 hover:underline dark:text-white"
          >
           {item?.name}
          </div>

          <div className="mt-1 flex items-center gap-2">
            <div className="flex items-center">
              <svg
                className="h-3 w-3 text-orange-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            </div>

            <p className="text-[13px] font-medium text-gray-900 dark:text-white">
              5.0
            </p>
            <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400">
              (455)
            </p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Fast Delivery
              </p>
            </li>

            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Best Price
              </p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[22px] font-[600] leading-tight text-gray-900 dark:text-white">
              ${item?.amount}
            </p>

            <Button
              type="button"
              onClick={handleAddToCart}
              className="inline-flex items-center rounded-lg bg-orange-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                className="-ms-2 me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="bg-white rounded shadow overflow-hidden group">
    //     <div className="relative" style={{ height: "150px" }}>
    //       <div className="border w-[100%] h-[150px] overflow-hidden">
    //         {/* <LazyLoadImage
    //         src={item?.img_url}
    //         style={{ width: "100%", height: "100%" }}
    //         effect="blur"
    //         alt="productImage"
    //       /> */}
    //       </div>

    //       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
    //         <Link
    //           href="/shop"
    //           className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
    //         >
    //           <i className="fas fa-search"></i>
    //         </Link>
    //         <span
    //           className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center
    //         hover:bg-gray-800 transition"
    //         >
    //           <i className="far fa-heart"></i>
    //         </span>
    //         <p className="text-sm text-white font-medium">
    //           {/* {item?.store?.brand_name} */}
    //           brand name
    //         </p>
    //       </div>
    //     </div>
    //     <div
    //       className="pt-4 pb-3 px-4"
    //       style={{
    //         height: "140px",
    //       }} /*remove height after summary cut is implemented*/
    //     >
    //       <Link
    //         href={
    //           // `/product-details/${item?.slug}`
    //           ""
    //         }
    //       >
    //         <p className="uppercase font-medium text-l text-gray-800 hover:text-primary transition">
    //           {/* {item?.name} */}
    //           item name
    //         </p>
    //       </Link>
    //       <p className="text-xs text-gray-500 mb-2">
    //         {/* {item?.description.slice(0, 33)} ... */}
    //         item description...
    //       </p>
    //       <div className="flex items-baseline mb-1 space-x-2 font-roboto">
    //         <p className="text-l text-primary font-semibold">
    //           {/* ₦{item?.amount} */}
    //           price
    //         </p>
    //       </div>
    //       <div>
    //         <Rating
    //         //   rating={item?.rating}
    //         //   reviews={item?.views}
    //         />
    //       </div>
    //     </div>
    //     {/* use shadcn btn */}
    //     {/* <Button
    //     className="block w-full border border-primary rounded-none rounded-b px-8 py-2 font-medium"
    //     primary
    //     onClick={() => {
    //       props.addToCarthandler(product);
    //     }}
    //   >
    //     Add to cart
    //   </Button> */}
    //   </div>
    // </div>
  );
}
