"use client";

import Rating from "@/components/molecules/cards/rating";
import Products from "@/components/molecules/products";
import { useGetSingleProductForBuyerQuery } from "@/redux/services/product/productAPIs/productApi";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetails() {
    const [quantity, setQuantity] = useState(1);
    const [showDetails, setShowDetails] = useState(true);
    const [showReviews, setShowReviews] = useState(false);
    const [index, setIndex] = useState(0);
    const [currentImage, setCurrentImage] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const [imageLoading, setImageLoading] = useState(false);
    // const [productId, setProductId] = useState("");
  const params = useSearchParams();
    const productId = params.get("id");
    const {data: product, isLoading, error, } = useGetSingleProductForBuyerQuery(productId);

    console.log(error);
    const handleShowDetails = () => {
        setShowDetails(true);
        setShowReviews(false);
      };
      const handleShowReviews = () => {
        setShowReviews(true);
        setShowDetails(false);
      };
    //   types as any for now
      const handleQuantityChange = (e: any) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (!isNaN(newQuantity)) {
          setQuantity(newQuantity);
        }
      };

    // const { _id: product_id } = useParams(); useSearchParams

    useEffect(() => {
        if (imageUrls.length > 0) {
          setImageLoading(true);
    
          setTimeout(() => {
            setCurrentImage(imageUrls[index]);
            setImageLoading(false);
          }, 3000);
        }
      }, [index, imageUrls]);
  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : error ? (
        // <MessageBox variant="danger">{error}</MessageBox>
        <div>an error occured</div>
      ) : (
        <div>
          {/* <Breadcrumbs page="Product view" /> */}
          <div className="container grid md:grid-cols-2 gap-6">
            <div>
              <div className="container w-96 h-96 block">
                {imageLoading ? (
                  <div className="flex items-center justify-center h-96">
                    {/* <LoadingBox /> */}
                    loading...
                  </div>
                ) : (
                  <Image
                    // src={currentImage?.url}
                    src="https://res.cloudinary.com/djvjxp"
                    alt="test"
                    className="p-2 border"
                  />
                )}
              </div>
              <div className="grid grid-cols-5 gap-4 mt-4">
                {/* {imageUrls?.map((items) => (
                  <div>
                    <Image
                      key={items.index}
                      src={items.url}
                      alt="test"
                      onMouseEnter={() => {
                        setIndex(items.index);
                      }}
                      className={`cursor-pointer p-1 border hover:border-primary w-36 h-10=2 ${
                        currentImage.index === items.index
                          ? "border-orange-500"
                          : ""
                      }`}
                    />
                  </div>
                ))} */}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium uppercase mb-2">
                {product?.data?.name}
              </h3>
              <div className="my-2">
                <Rating
                  // rating={product?.data?.rating}
                  // reviews={product?.data.views}
                />
                {/* todo: fix rating props */}
              </div>
              <div className="space-y-2">
                <p className="text-gray-800 font-semi-bold space-x-2">
                  <span className="text-gray-800 font-semibold">Summary:</span>
                  <span>{product?.data?.description.slice(0, 30)}...</span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Store:</span>
                  <span className="text-gray-600">
                    {product?.data?.store?.brand_name}
                  </span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">Category:</span>
                  <span className="text-gray-600">
                    {product?.data?.category}
                  </span>
                </p>
                <p className="space-x-2">
                  <span className="text-gray-800 font-semibold">SKU:</span>
                  <span className="text-gray-600">{product?.data?.slug}</span>
                </p>
              </div>
              <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                <p className="text-2xl text-primary font-semibold">
                  ₦{product?.data?.amount}
                </p>
                <p className="text-base text-gray-400 line-through">{}</p>
              </div>
              <p className="mt-4 text-gray-600">{}</p>
              {/* size */}
              <div className="pt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
                <div className="flex items-center gap-2">
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-mini"
                    />
                    <label
                      htmlFor="size-mini"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      mini
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-13"
                    />
                    <label
                      htmlFor="size-13"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      13&quot;
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-15"
                    />
                    <label
                      htmlFor="size-15"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      15&quot;
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      className="hidden"
                      id="size-17"
                    />
                    <label
                      htmlFor="size-17"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      17&quot;
                    </label>
                  </div>
                </div>
              </div>

              {/* color */}
              <div className="pt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">Color</h3>
                <div className="flex items-center gap-2">
                  <div className="color-selecter">
                    <input
                      type="radio"
                      name="color"
                      className="hidden"
                      id="color-grey"
                    />
                    <label
                      htmlFor="color-grey"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "grey" }}
                    ></label>
                  </div>
                  <div className="color-selecter">
                    <input
                      type="radio"
                      name="color"
                      className="hidden"
                      id="color-white"
                    />
                    <label
                      htmlFor="color-white"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "white" }}
                    ></label>
                  </div>
                  <div className="color-selecter">
                    <input
                      type="radio"
                      name="color"
                      className="hidden"
                      id="color-silver"
                    />
                    <label
                      htmlFor="color-silver"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "silver" }}
                    ></label>
                  </div>
                  <div className="color-selecter">
                    <input
                      type="radio"
                      name="color"
                      className="hidden"
                      id="color-pink"
                    />
                    <label
                      htmlFor="color-pink"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "pink" }}
                    ></label>
                  </div>
                  <div className="color-selecter">
                    <input
                      type="radio"
                      name="color"
                      className="hidden"
                      id="color-black"
                    />
                    <label
                      htmlFor="color-black"
                      className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                      style={{ backgroundColor: "black" }}
                    ></label>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-4">
                <h3 className="text-sm text-gray-800 uppercase mb-1">
                  quantity
                </h3>
                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max rounded-md overflow-hidden">
                  <button
                    disabled={quantity <= 1}
                    className="px-3 py-1.5 flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                    onClick={() => setQuantity((prev) => prev - 1)}
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
                    onClick={() => setQuantity((prev) => prev + 1)}
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
              </div>

              <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <div>
                  {/* <Button
                    className="uppercase block w-full border border-primary rounded-none rounded-b px-8 py-2 font-medium"
                    primary
                    onClick={addToCarthandler}
                    disabled={
                      product?.product?.quantityInStock < 1 ||
                      quantity < 1 ||
                      quantity > product?.product?.quantityInStock
                        ? true
                        : false
                    }
                    loading={loading}
                  >
                    <i className="fas fa-shopping-bag"></i> Add to cart
                  </Button> */}
                  <p className="text-xs text-red-500 py-2">
                    {product?.product?.quantityInStock < 1
                      ? "item sold out"
                      : quantity < 1
                      ? "cart cannot be empty"
                      : quantity > product?.product?.quantityInStock
                      ? "quantity cannot be greater than stock"
                      : ""}
                  </p>
                </div>

                {/* <Button
                  className="uppercase block w-full border border-primary rounded-none rounded-b px-8 py-2 font-medium"
                  secondary
                  loading={loading}
                  onClick={addToWishlistHandler}
                >
                  <i className="fas fa-heart"></i> Wish list
                </Button> */}
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href="/"
                  className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="/"
                  className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="/"
                  className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="container pb-16 pt-6">
            <div className="flex gap-4 border-b border-gray-200 font-roboto text-gray-800 pb-0 font-medium">
              <h3
                onClick={handleShowDetails}
                className={` font-roboto text-gray-800 mb-3 font-medium cursor-pointer ${
                  showDetails ? "text-primary " : "text-gray-400"
                }`}
              >
                Product details
              </h3>
              {/* <h3
                onClick={handleShowReviews}
                className={`border-l-2 border-orange-500 font-roboto text-gray-800 mb-3 pl-4 font-medium cursor-pointer ${
                  showReviews ? "text-primary" : "text-gray-400"
                }`}
              >
                Reviews
              </h3> */}
            </div>
            <div className={!showDetails ? "hidden" : ""}>
              <div className="pt-6">
                <div className="text-gray-600 space-y-3">
                  <p>{product?.data?.description} </p>
                </div>
              </div>
              <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tbody>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                      Color
                    </th>
                    <td className="py-2 px-4 border border-gray-300">
                      {product?.data?.product_variants[0]?.color}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                      Size
                    </th>
                    <td className="py-2 px-4 border border-gray-300">
                      {
                        product?.data?.product_variants[0]
                          ?.product_variant_specs[0]?.size
                      }
                    </td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                      Quantity in stock
                    </th>
                    <td className="py-2 px-4 border border-gray-300">
                      {
                        product?.data?.product_variants[0]
                          ?.product_variant_specs[0]?.quantity
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={!showReviews ? "hidden" : ""}>
              <div className="flex py-4 gap-4 w-[70%]">
                <div className="w-[80px]">
                  <Image
                    src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
                    alt=""
                    className="w-full border rounded"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-800">By Sally Joe</p>
                  <Rating 
                  // rating="4" reviews="" 
                  />
                  <p className="text-xs text-gray-500">21 July, 2022</p>
                  <p className="text-xs text-gray-500 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    assumenda excepturi tempore voluptatum dolores explicabo
                    iste reiciendis pariatur consequatur recusandae?
                  </p>
                </div>
              </div>
              <div className="flex py-4 gap-4 w-[70%]">
                <div className="w-[80px]">
                  <Image
                    src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
                    alt=""
                    className="w-full border rounded"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-800">By Sally Joe</p>
                  <Rating 
                  // rating="4" reviews="" 
                  />
                  <p className="text-xs text-gray-500">21 July, 2022</p>
                  <p className="text-xs text-gray-500 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    assumenda excepturi tempore voluptatum dolores explicabo
                    iste reiciendis pariatur consequatur recusandae?
                  </p>
                </div>
              </div>
              <div className="flex py-4 gap-4 w-[70%]">
                <div className="w-[80px]">
                  <Image
                    src="https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-beard-png-image_2166772.jpg"
                    alt=""
                    className="w-full border rounded"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-800">By Sally Joe</p>
                  <Rating 
                  // rating="4" reviews="" 
                  />
                  <p className="text-xs text-gray-500">21 July, 2022</p>
                  <p className="text-xs text-gray-500 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    assumenda excepturi tempore voluptatum dolores explicabo
                    iste reiciendis pariatur consequatur recusandae?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
              related products
            </h2>
            <Products />
          </div>
        </div>
      )}
    </div>
  )
}
