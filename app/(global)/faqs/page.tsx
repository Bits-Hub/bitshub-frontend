"use client";

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import Breadcrumbs from "../components/Breadcrumbs";
import { ordersAndReturnsFAQs, shippingFAQs, paymentFAQs } from "./data";
const FAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (

    <div className='container column justify-content-center w-full md:w-[90%] items-center mb-32'>
      {/* <Breadcrumbs page="FAQ" /> */}

      <h1 className='text-3xl  text-gray-800 capitalize mb-4'>F.A.Q</h1>
      <div className='max-w-md mb-10'>
        <p className=''>Can’t find the answer you’re looking for? We’ve shared some
          of your most frequently asked questions to help you out!</p>
      </div>
      <h1 className="text-xl md:text-2xl lg:text-2xl font-medium text-gray-800 mb-5">Shipping Information</h1>
      <div className='bg-slate-50 rounded-md border border-slate-300 px-5'>


        <Fragment>
          <div>
            {shippingFAQs.map((item, index) => {
              return (

                <Accordion key={index} open={open === item.id} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <AccordionHeader onClick={() => handleOpen(item.id)}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <h2 className="text-[16px] font-normal">{item.question}</h2>
                  </AccordionHeader>
                  <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
                    {item.answer}
                  </AccordionBody>
                </Accordion>
              )
            })}
          </div>
        </Fragment>





      </div>
      <h1 className="text-xl lg:text-2xl md:text-2xl font-medium text-gray-800 mb-5 mt-10">Orders And Returns</h1>
      <div className='bg-slate-50 rounded-md border border-slate-300 px-5'>
        <Fragment>
          {ordersAndReturnsFAQs.map((item, index) => {
            return (

              <Accordion key={index} open={open === item.id} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <AccordionHeader onClick={() => handleOpen(item.id)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <h2 className="text-[16px] font-normal">{item.question}</h2>
                </AccordionHeader>
                <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
                  {item.answer}
                </AccordionBody>
              </Accordion>
            )
          })}

        </Fragment>
      </div>

      <h1 className="text-xl lg:text-2xl md:text-2xl font-medium text-gray-800 mb-5 mt-10">Payments</h1>
      <div className='bg-slate-50 rounded-md border border-slate-300 px-5'>
        <Fragment>
          {paymentFAQs.map((item, index) => {
            return (

              <Accordion key={index} open={open === item.id} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <AccordionHeader onClick={() => handleOpen(item.id)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <h2 className="text-[16px] font-normal">{item.question}</h2>
                </AccordionHeader>
                <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-indigo-200 border-b-indigo-500 ">
                  {item.answer}
                </AccordionBody>
              </Accordion>
            )
          })}
        </Fragment>
      </div>
    </div>


  )
}
export default FAQ;

