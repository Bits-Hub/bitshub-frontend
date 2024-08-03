import React from 'react'

export default function CheckoutSteps({step1, step2, step3, step4}: {step1: boolean, step2: boolean, step3: boolean, step4: boolean}) {
  return (
    <div className="container row checkout-steps text-xs md:text-base">
      <div className={step1 ? "active" : ""}>Sign-In</div>
      <div className={step2 ? "active" : ""}>Shipping</div>
      <div className={step3 ? "active" : ""}>Payment</div>
      <div className={step4 ? "active" : ""}>Place Order</div>
    </div>
  )
}
