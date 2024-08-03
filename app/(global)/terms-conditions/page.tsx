import React from "react";
import { termsAndConditions } from "./data";
// import Breadcrumbs from "../components/Breadcrumbs";


const TermsCondition = () => {
    return (
        <div className="flex flex-col container mb-6">
            {/* <Breadcrumbs page="Terms & Conditions" /> */}
            <h1 className="text-3xl text-gray-800 capitalize font-medium text-center ">Terms & Conditions</h1>
            <div className="items-center mt-5">
                {termsAndConditions.map((item) => {
                    return (
                        <div key={item.id} className="mb-4">
                            <h3 className="font-bold py-2 text-gray-800">{item.title}</h3>
                            <p className="flex  text-gray-700 ">{item.content}</p>
                        </div>
                    )
                })}


            </div>

        </div>
    )
}

export default TermsCondition;