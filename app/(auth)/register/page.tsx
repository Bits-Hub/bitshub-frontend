"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const [agreement, setAgreement] = useState(false);
    const router = useRouter();
    // const registerHandler = (data) => {
    //     if (!agreement) {
    //       alert("T & C agreement required!");
    //     } else {
    //       dispatch(
    //         register(data?.first_name, data?.last_name, data?.email, data?.password)
    //       );
    //     }
    //   };
    
    //   useEffect(() => {
    //     if (userInfo) {
    //       navigate(redirect);
    //     }
    //   }, [dispatch, navigate, redirect, userInfo]);
  return (
    <div className="container py-16">
    <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 className="text-2xl uppercase font-medium mb-1">
        Create an account
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Sign up here if you&apos;re a new customer
      </p>
      <form>
        <div className="space-y-4">
          <div>
            {/* use formik */}
            {/* <InputField
              label="First name"
              id="first_name"
              type="text"
              value={values.first_name}
              onChange={handleChange("first_name")}
              errorMsg={touched.first_name ? errors.first_name : undefined}
              placeholder="John"
            />
            <InputField
              label="Last name"
              id="last_name"
              type="text"
              value={values.last_name}
              onChange={handleChange("last_name")}
              errorMsg={touched.last_name ? errors.last_name : undefined}
              placeholder="Doe"
            />

            <InputField
              label="Email"
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              errorMsg={touched.email ? errors.email : undefined}
              placeholder="Enter your email address"
            />
            <InputField
              label="Password"
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
              errorMsg={touched.password ? errors.password : undefined}
              placeholder="Enter your password"
            /> */}
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreement"
              onClick={() => {
                setAgreement(!agreement);
              }}
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="agreement"
              className="text-gray-600 ml-3 cursor pointer"
            >
              <span>I have read and agreed to the </span>{" "}
              <span>
                <a href="/#" className="text-primary">
                  terms and conditions
                </a>
              </span>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <button
            // onClick={handleSubmit}
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            create account
          </button>
        </div>
      </form>
      <div className="flex mt-6 justify-center relative">
        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
          or sign up with
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>
      <div className="flex mt-4 gap-4">
        <a
          href="/"
        //   onClick={googleAuthHandler}
          className="w-1/2 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-500 rounded uppercase font-roboto font-medium text-sm"
        >
          Google
        </a>
      </div>
      <p className="mt-4 text-gray-600 text-center">
        Already have an account?
        <span className="text-primary cursor-pointer">
          <Link href='/login'> Login Now</Link>
        </span>
      </p>
      <p className="mt-4 text-gray-600 text-center">
        Want to become a vendor?
        <span className="text-primary cursor-pointer">
          <Link href="/login/create-store"> Create a store</Link>
        </span>
      </p>
    </div>
  </div>
  )
}
