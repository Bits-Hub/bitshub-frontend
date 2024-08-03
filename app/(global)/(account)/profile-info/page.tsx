"use client";

import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getDefaultAddress } from "../actions/userActions";
// import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
//   const signinData = useSelector((state) => state?.userSignin);
//   const { userInfo } = signinData;
//   const dispatch = useDispatch();

//   const navigate = useNavigate();
//   useEffect(() => {
//     dispatch(getDefaultAddress());
//   }, [dispatch]);

//   const defaultAddress = useSelector((state) => state?.getDefaultAddress?.defaultAddress?.data);
  const toUpdateUserProfileComponent = () => {
    // navigate('/account/update_user_profile_info', { state: { userInfo } });
  }

  return (
    <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <div>
        <div className="p-px space-x-4">
          Profile Information
        </div>
        <div className=" px-0 pt-5 pb-7 space-y-5 ">
          <div className="shadow rounded bg-white px-4 pt-4 pb-4 relative">
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium capitalize text-gray-800 text-lg flex justify-between">
                {/* <h3 className="px-1">{userInfo?.data?.first_name}</h3>
                <h3 className="px-1">{userInfo?.data?.last_name}</h3> */}
              </div>
              <a className="text-primary cursor-pointer" onClick={() => { toUpdateUserProfileComponent() }}>
                Edit
              </a>
            </div>
            <div className="">
              {/* <p className="text-gray-800">{userInfo?.data?.email}</p>
              <p className="text-gray-800">{`${defaultAddress !== undefined ? defaultAddress?.phone_number : 'loading..'}`}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
