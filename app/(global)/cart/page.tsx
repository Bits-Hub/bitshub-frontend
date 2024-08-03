"use client";

import { useRouter } from "next/navigation";

export default function ShoppingCard() {
    const router = useRouter();
  return (
    <div>
      {/* <Breadcrumbs page="cart" /> */}
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="space-y-4 col-span-12 lg:col-span-8">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Cart items</p>
          </div>
          {/* {cartItems?.data?.length === 0 ? (
            <MessageBox>
              No item in cart currently. <Link to="/shop">Go shopping</Link>
            </MessageBox>
          ) : (
            cartItems?.data?.map((item, index) => {
              return (
                <CartCard
                  item={item}
                  key={item.id || index}
                  handleDelete={handleDelete}
                />
              );
            })
          )} */}
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="border border-gray-200 p-4 rounded">
            <p className="text-gray-800 text-lg mb-4 font-medium uppercase">
              Order Summary
            </p>

            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
              <p>Subtotal</p>
              <p>
                {/* ({cartItems?.data?.reduce((a, c) => a + c.quantity, 0)} items):
                ₦
                {cartItems?.data
                  ?.reduce((a, c) => a + c.amount * c.quantity, 0)
                  .toLocaleString()} */}
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 py-3">
              <p>Shipping</p>
              <p className="text-xs text-gray-400">
                ... Awaiting shipment details
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 py-3">
              <p>Tax</p>
              {/* <p>₦{vat?.toLocaleString()}</p> */}
            </div>
            <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3">
              <p className="font-semibold">TOTAL</p>
              <div className="text-right">
                <p>
                  ₦
                  {/* {cartItems?.data?.reduce(
                    (a, c) => a + c.amount * c.quantity,
                    0
                  )} */}
                </p>
                <p className="text-xs text-gray-400">
                  ... Awaiting shipment fee
                </p>
              </div>
            </div>

            {/* <Button
              disabled={cartItems?.data?.length === 0 ? true : false}
              onClick={() => {
                navigate("/login?redirect=/shipping");
              }}
              primary
              className="w-full px-8 py-2 font-medium bg-primary text-white hover:bg-primary-dark transition-colors duration-300 rounded-lg"
            >
              Proceed to Shipment
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
