"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PlaceOrder() {
    const [isPaid, setIsPaid] = useState(false);
    const [PaidAt, setPaidAt] = useState("");
    const [isDelivered, setIsDelivered] = useState(false);
    const [deliveredAt, setDeliveredAt] = useState("");
    const [loader, setLoader] = useState(false);

    const router = useRouter();
  return (
    <div>
    {/* <Breadcrumbs page="confirm details" /> */}
    <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
      <div className="col-span-12 md:col-span-8 space-y-4">
        <div className="border border-gray-200 p-4 rounded">
          <p className="text-sm font-medium text-gray-800 pb-2 flex items-center justify-between">
            DELIVERY DETAILS
            <Link href="/shipping" className="text-primary text-xs">
              Change
            </Link>
          </p>
          <hr />
          <div className="pt-2 space-y-1">
            <p className="font-medium text-xs">
              {/* {defaultAddress?.data?.first_name} {defaultAddress?.data?.last_name} */}
            </p>

            <p className="font-medium text-xs text-gray-400">
              {/* {`${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.region}`} */}
              {/* {defaultAddress?.data?.state}, {defaultAddress?.data?.city}, {defaultAddress?.data?.street}, */}
            </p>
            <p className="font-medium text-xs text-gray-400">
              {/* {shippingDetails.phone} */}
              {/* {defaultAddress?.data?.phone_number}, */}
            </p>
          </div>
        </div>
        <div className="border border-gray-200 p-4 rounded">
          <p className="text-sm font-medium text-gray-800 pb-2 flex items-center justify-between">
            PAYMENT METHOD
            <Link href="/payment" className="text-primary text-xs">
              Change
            </Link>
          </p>
          <hr />
          <div className="pt-2">
            <p className="font-medium text-xs text-gray-400">
              {/* {paymentMethod} */}
            </p>
          </div>
        </div>
        <div className="border border-gray-200 p-4 rounded">
          <p className="text-sm font-medium text-gray-800 pb-1 flex items-center justify-between">
            ITEMS IN CART
            <Link href="/cart/:id" className="text-primary text-xs">
              Change
            </Link>
          </p>
          <hr />
          {/* {cartItems?.data?.map((item) => {
            return (
              <div
                className="flex-col flex md:flex-row items-center justify-between gap-1 py-2"
                key={item?.id}
              >
                <div className="w-20">
                  <img className="w-full" src={item?.variant_img_url} alt={item?.id} />
                </div>
                <div>
                  <span className="text-gray-400 text-xs">{item?.product_details?.name}</span>
                  <span className="text-green-400 text-xs">
                    {item?.condition}
                  </span>
                </div>

                <div className="text-gray-400 mr-4">
                  <span className="text-gray-400 text-xs pr-2">
                    ₦{item.amount.toLocaleString()} x {item.quantity}
                  </span>
                  <span className="text-gray-400 font-semibold text-xs">
                    = ₦{item.amount * item.quantity.toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>

      <div className="col-span-12 md:col-span-4">
        <div className="bg-gray-200 text-black mb-4 rounded">
          <p className="px-4 py-3 text-sm font-semibold">Your Order</p>
        </div>
        <div className="border border-gray-200 p-4 rounded">
          <p className="text-sm font-medium text-gray-800 pb-1">
            ITEMS IN CART
          </p>
          <hr />
          {/* {cartItems?.data?.map((item) => {
            return (
              <div className="space-y-2" key={item.id}>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400 text-xs">{item?.product_details?.name}</p>
                    <p className="text-xs text-gray-400">{item?.condition}</p>
                  </div>
                  <p className="text-gray-400 text-xs">X{item?.quantity}</p>
                  <p className="text-gray-400 font-medium text-xs">
                    ₦{item?.amount?.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })} */}
          <div className="flex justify-between border-b border-gray-200 text-gray-400 font-medium py-3">
            <p className="text-xs">Subtotal</p>
            <p className="text-xs">
              {/* ({cartItems?.data?.reduce((a, c) => a + c.qty, 0)} item(s)): ₦ */}
              {/* {shippingDetails?.subtotal?.toLocaleString()} */}
            </p>
          </div>
          {/* these were commented out earlier */}
          {/* <div className="flex justify-between border-b border-gray-200 text-gray-400 font-medium py-3 text-xs">
            <p>Shipping</p>
            <p>₦{shippingDetails.shippingPrice.toLocaleString()}</p>
          </div> */}
          {/* <div className="flex justify-between border-b border-gray-200 text-gray-400 font-medium py-3 uppercase text-xs">
            <p>VAT</p>
            <p>₦{shippingDetails.taxPrice.toLocaleString()}</p>
          </div> */}
          {/* <div className="flex justify-between border-gray-200 text-gray-400 font-medium py-3 uppercase text-xs">
            <p className="font-semibold">Total</p>
            <p>₦{shippingDetails.totalPrice.toLocaleString()}</p>
          </div> */}
          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              id="agreement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
            />
            <label
              htmlFor="agreement"
              className="text-gray-400 ml-3 cursor-pointer text-xs"
            >
              Agree to our
              <a href="/" className="text-primary pl-1">
                terms & condition
              </a>
            </label>
          </div>
          {/* <Button
            disabled={loader}
            className="w-full p-2"
            primary
            onClick={placeOrderHandler}
          >
            {loader ? "loading..." : "Place order"}
          </Button> */}
        </div>
      </div>
    </div>
  </div>
  )
}
