"use client";

import Link from "next/link";
import React, { useEffect } from "react";
// import AddressCards from "./AddressCards";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { setDefaultAddress, userAddressList } from "../actions/userActions";
// import LoadingBox from "./LoadingBox";
// import MessageBox from "./modals/MessageBox";


const ManageAddress = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(userAddressList());
//   }, [dispatch]);

//   const addressList = useSelector((state) => state?.userAddressList?.addresses?.data);
//   const addressData = useSelector((state) => state?.userAddressList);

//   const { loading, error } = addressData


  return (
    <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      {
      // loading
      false 
      ? (
        // <LoadingBox></LoadingBox>
        'loading...'
      ) : 
      // error
      false
       ? (
        // <MessageBox variant="danger">{error}</MessageBox>
        'error...'
      ) : (
        <div>
          <button>
            <Link href='/add_address' className=" hover:text-primary focus:text-primary transition p-px flex space-x-4 items-center">
              <span>
                Add Address
              </span>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Link>
          </button>
          <div className=" px-0 pt-5 pb-7 flex flex-col space-y-5 lg:h-[80vh] h-[55vh] overflow-x-scroll">
            {/* {addressList.map((address) => {
              return <AddressCards address={address} key={address.id} />
            })} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAddress;