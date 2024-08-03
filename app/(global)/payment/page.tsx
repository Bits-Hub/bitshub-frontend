"use client";

import CheckoutSteps from "@/components/molecules/checkoutSteps";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentMethod() {
    const [paymentMethod, setPaymentMethod] = useState("paystack");
    const router = useRouter();
  return (
    <div className="lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      {/* <Breadcrumbs page="Payment method" /> */}
      <div className="container">
        <CheckoutSteps step1 step2 step3 step4={false} />
        <div className="bg-gray-200 text-black my-4 rounded">
          <p className="px-4 py-3 text-sm font-semibold">
            Select payment method
          </p>
        </div>
{/* 
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={paymentMethod}
            onChange={handleChange}
          >
            <FormControlLabel
              value="paystack"
              control={<Radio />}
              label="Paystack"
            />
            <FormControlLabel
              disabled
              value="cash"
              control={<Radio />}
              label="Cash on delivery"
            />
          </RadioGroup>
        </FormControl> */}

        <div className="my-4">
          {/* <Button
            className="py-2 px-4 text-sm"
            primary
            onClick={submitHandler}
            children="continue"
          /> */}
        </div>
      </div>
    </div>
  )
}
