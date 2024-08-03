"use client";

import CheckoutSteps from "@/components/molecules/checkoutSteps";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Shipping() {
    const router = useRouter();
    const [checkBox, setCheckBox] = useState(false);
  return (
    <div>
    {/* <Breadcrumbs page="Checkout" /> */}
    <CheckoutSteps step1 step2 step3={false} step4={false}/>

    {
    false
    // loading
     ? (
    //   <LoadingBox></LoadingBox>
    ''
    ) : 
    // error
    false
    ? (
    //   <MessageBox variant="danger">{error}</MessageBox>
    ''
    ) : (
      <div>
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
          <div className="col-span-12 md:col-span-8">
            <div className="bg-gray-200 text-black mb-4 rounded">
              <p className="px-4 py-3 text-sm font-semibold">Shipping Details</p>
            </div>
            <div>
              {/* <button
            className="bg-gray-300 text-gray-800 rounded p-2 my-2"
            onClick={chooseOnMap}
          >
            Choose location on map
          </button> */}
            </div>
            {/* <div className="border border-gray-200 p-4 rounded">
              {defaultAddress?.data ? <div className="space-y-4">
                <form>
                  <div className="py-2">
                    <InputField
                      label="Full Name"
                      id="name"
                      required
                      type="text"
                      value={values.fullName}
                      onChange={handleChange("fullName")}
                      errorMsg={touched.fullName ? errors.fullName : undefined}
                      placeholder="Enter your Fullname"
                      disabled={true}
                    />

                  </div>
                  <div className="py-2">
                    <InputField
                      label="Phone"
                      id="phone"
                      type="number"
                      required
                      value={values.phone}
                      onChange={handleChange("phone")}
                      errorMsg={touched.phone ? errors.phone : undefined}
                      placeholder="Enter your Phone no"
                      disabled={true}
                    />

                  </div>
                  <div className="py-2">
                    <InputField
                      label="Address"
                      id="address"
                      type="text"
                      required
                      value={values.address}
                      onChange={handleChange("address")}
                      errorMsg={touched.address ? errors.address : undefined}
                      placeholder="Enter your address"
                      disabled={true}
                    />

                  </div>
                  <div className="py-2 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <InputField
                        label="City"
                        id="city"
                        required
                        type="text"
                        value={values.city}
                        onChange={handleChange("city")}
                        errorMsg={touched.city ? errors.city : undefined}
                        placeholder="Enter your city"
                        disabled={true}
                      />

                    </div>
                    <div className="w-full">
                      <InputField
                        label="State"
                        id="state"
                        required
                        type="text"
                        value={values.region}
                        onChange={handleChange("region")}
                        errorMsg={touched.region ? errors.region : undefined}
                        placeholder="Enter your State"
                        disabled={true}
                      />

                    </div>

                  </div>
                  <div className="h-fit mt-[2rem] flex justify-end">
                    <button className=" bg-orange-600 text-[14px] w-fit px-4 py-3 cursor-pointer rounded- text-white">
                      Change default address
                    </button>

                  </div>
                </form>
              </div> : <div className="h-[10rem] flex flex-col items-center justify-center">
                <h1>No default address selected</h1>

                <button className="text-white bg-orange-500 py-2 px-3 mt-3 rounded-xl hover:border border-orange-500 hover:text-orange-500 hover:bg-white" onClick={() => navigate('/account/manage-address')}>set default address</button>
              </div>}
            </div> */}
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="bg-gray-200 text-black mb-4 rounded">
              <p className="px-4 py-3 text-sm font-semibold">Your Order</p>
            </div>
            <div className="border border-gray-200 p-4 rounded">
              <p className="text-gray-400 text-lg mb-4 font-medium uppercase">
                order summary
              </p>
              {/* {cartItems?.data?.map((item) => {
                return (
                  <div className="space-y-2" key={item.id}>
                    <div className="text-xs flex justify-between">
                      <div>
                        <p className="text-xs text-gray-400 text-gray-800 font-medium">
                          {item.product_details.name}
                        </p>
                      </div>
                      <p className="text-gray-400">X{item.quantity}</p>
                      <p className="text-gray-400 font-medium">
                        ₦{item.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })} */}
              <div className="flex justify-between border-b border-gray-200 text-xs  text-gray-400 font-medium py-3">
                <p>Subtotal</p>
                <p>
                  {/* {totalQuantity} item: ₦ */}
                  {/* ₦{subTotal?.toLocaleString()} */}
                </p>
              </div>
              {/* <div className="flex justify-between border-b border-gray-200 text-sm text-gray-400 font-medium py-3">
                <p>Shipping</p>
                <p>₦{shippingPrice.toLocaleString()}</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 text-sm text-gray-400 font-medium py-3 uppercase">
                <p>VAT</p>
                <p>₦{taxPrice.toLocaleString()}</p>
              </div>
              <div className="flex justify-between border-gray-200 text-sm text-gray-400 font-medium py-3 uppercase">
                <p className="font-semibold">Total</p>
                <p>₦{totalPrice.toLocaleString()}</p>
              </div>
              <div className="flex items-center mb-4 mt-2">
                <input
                  type="checkbox"
                  id="agreement"
                  value={checkBox}
                  onClick={() => setCheckBox(!checkBox)}
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
                />
                <label
                  htmlFor="agreement"
                  className="text-gray-600 ml-3 cursor-pointer text-sm"
                >
                  Agree to our
                  <a href="/" className="text-primary pl-1">
                    terms & condition
                  </a>
                </label>
              </div> */}
              {/* <Button
                disabled={cartItems.length === 0 ? true : false}
                className="w-full p-2"
                primary
                onClick={handleSubmit}
              >
                Continue
              </Button> */}
            </div>
          </div>
        </div>
      </div>

    )}

  </div>
  )
}
