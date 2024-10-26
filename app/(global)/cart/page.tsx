"use client";

import { Cart } from "@/@types";
import { Button } from "@/components/atoms/ui/button";
import CartCard from "@/components/molecules/cards/cartCard";
import { calculateVAT } from "@/lib/utils";
import { useGetAllCartItemsQuery } from "@/redux/services/cart/cartApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShoppingCard() {
    const router = useRouter();
    const {data, isLoading, error} = useGetAllCartItemsQuery({});
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const [totalAmount, setTotalAmount] = useState(0);
      // Initialize quantities based on cart data
  useEffect(() => {
    if (data?.data) {
      const initialQuantities = data.data.reduce((acc: { [x: string]: any; }, item: { id: string | number; quantity: any; }) => {
        acc[item.id] = item.quantity;
        return acc;
      }, {} as { [key: string]: number });
      setQuantities(initialQuantities);
    }
  }, [data]);

  // Update total whenever quantities change
  useEffect(() => {
    const newTotal = data?.data?.reduce((acc: number, item: { id: string | number; quantity: any; amount: number; }) => {
      const quantity = quantities[item.id] || item.quantity;
      return acc + item.amount * quantity;
    }, 0);
    setTotalAmount(newTotal || 0);
  }, [quantities, data]);

  const updateQuantity = (id: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
  };
    const handleDelete = () => {
        // delete item from cart
    }
    console.log(data);
  return (
    <div>
      {/* <Breadcrumbs page="cart" /> */}
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="space-y-4 col-span-12 lg:col-span-8">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Cart items</p>
          </div>
          {data?.data?.length === 0 ? (
            // <MessageBox>
            //   No item in cart currently. <Link to="/shop">Go shopping</Link>
            // </MessageBox>
            // todo: work on message box and commented codes here.
            'No item in cart currently.'
          ) : (
            (data?.data as Cart[])?.map((item, index) => {
              return (
                <CartCard
                  item={item}
                  key={item.id || index}
                  quantity={quantities[item.id] || item.quantity}
                updateQuantity={(quantity) => updateQuantity(item.id, quantity)}
                  handleDelete={handleDelete}
                />
              );
            })
          )}
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="border border-gray-200 p-4 rounded">
            <p className="text-gray-800 text-lg mb-4 font-medium uppercase">
              Order Summary
            </p>

            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
              <p>Subtotal</p>
              <p>
              ₦{totalAmount.toLocaleString()}
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
              ₦{calculateVAT(totalAmount, 7.5)}
            </div>
            <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3">
              <p className="font-semibold">TOTAL</p>
              <div className="text-right">
                <p>
                  ₦
                  {totalAmount + calculateVAT(totalAmount, 7.5)}
                </p>
                <p className="text-xs text-gray-400">
                  ... Awaiting shipment fee
                </p>
              </div>
            </div>

            <Button
              disabled={data?.data?.length === 0 ? true : false}
              onClick={() => {
                router.push("/login?redirect=/shipping");
              }}
              className="w-full px-8 py-2 font-medium bg-primary text-white hover:bg-primary-dark transition-colors duration-300 rounded-lg"
            >
              Proceed to Shipment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
