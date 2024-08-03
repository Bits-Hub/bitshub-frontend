"use client"

import React, { useState, useEffect } from "react";

import avatar from "../images/avatar.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import ProfileModal from "./modals/ProfileModal";
// import SideBarModal from "./modals/SideBarModal";
// import { signout, userAddressList, getDefaultAddress } from "../actions/userActions";

// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";

const ProfileSideNav = () => {
//   const params = useLocation();
  const [showNav, setShowNav] = useState(false);
  const [currParam, setCurrParam] = useState('');
  const [open, setOpen] = useState(false);
  const updateParam = () => {
    // setCurrParam(params.pathname);
  }
//   useEffect(() => {
//     updateParam();
//   }, [params, updateParam]);

//   const { stores } = useSelector((state) => state.listStores);
//   const dispatch = useDispatch();
  const navigate = useRouter();
//   useEffect(() => {
//     dispatch(userAddressList());
//     dispatch(getDefaultAddress());
//   });

  const handleProfileNav = () => {
    setShowNav(!showNav);
  };

  const handleClick = () => {
    setOpen(!open);
  };
//   const handleStoreId = (id) => {
//     // dispatch(setActiveStore(id));
//   };
  const signoutHandler = () => {
    // dispatch(signout());
    navigate.push("/login");
  };

//   const signinData = useSelector((state) => state?.userSignin);
//   const { userInfo } = signinData;

  return (
    <div className="col-span-12 lg:col-span-3">
      <div className="px-4 py-3 shadow flex items-center gap-4 relative">
        <div className="flex-shrink-0">
          {/* <img
            src={avatar}
            alt=""
            className="rounded-full h-14 w-14 border border-gray-200 p-1 object-cover"
          /> */}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Hello,</p>
              {/* <p className="text-gray-800 font-medium capitalize">{`${userInfo?.data.first_name} ${userInfo?.data.last_name}`}</p> */}
            </div>

            <i
              className="block lg:hidden fas fa-bars text-white border border-primary bg-primary p-2 rounded hover:bg-transparent hover:text-primary transition"
              onClick={() => {
                handleProfileNav();
              }}
            ></i>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600 hidden lg:block">
        <div className="space-y-1 pl-8">
          <Link
            href="/manage-account"
            className={currParam?.includes('manage-account') ? "relative text-primary block font-medium transition" : "relative hover:text-primary focus:text-primary  block font-medium transition"}
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            Manage Account
          </Link>
          <Link
            href="/profile-info"
            className={currParam?.includes('profile-info') ? "relative text-primary block transition" : "relative hover:text-primary focus:text-primary  block transition"}
          >
            Profile Information
          </Link>
          <Link
            href="/manage-address"
            className={currParam?.includes('manage-address') || currParam?.includes('update_user_address') || currParam?.includes('add_address') ? "relative text-primary block transition" : "relative hover:text-primary focus:text-primary  block transition"}
          >
            Manage Address
          </Link>
          <Link
            href="/change-password"
            className={currParam?.includes('change-password') ? "relative text-primary block transition" : "relative hover:text-primary focus:text-primary  block transition"}
          >
            Change Password
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <Link
            href="/order-history"
            className={currParam?.includes('order-history') || currParam?.includes('review-form') ? "relative text-primary font-medium block transition" : "relative hover:text-primary focus:text-primary font-medium  block transition"}
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            My Order History
          </Link>
          <Link
            href="/returns"
            className={currParam?.includes('returns') ? "relative text-primary block transition" : "relative hover:text-primary focus:text-primary  block transition"}
          >
            My returns
          </Link>
          <Link
            href="/cancellations"
            className={currParam?.includes('cancellations') ? "relative text-primary block transition" : "relative hover:text-primary focus:text-primary  block transition"}
          >
            My Cancellations
          </Link>
          <Link
            href="/reviews"
            className={currParam?.includes('reviews') ? "relative text-primary block transition" : "relative hover:text-primary focus:text-primary  block transition"}
          >
            My Reviews
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <Link
            href="/payment-methods"
            className={currParam?.includes('payment-methods') ? "relative text-primary font-medium block transition" : "relative hover:text-primary focus:text-primary font-medium  block transition"}
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            Payment Methods
          </Link>
          {/* <Link
            to="/account/voucher"
            className={currParam?.includes('voucher') ? "relative text-primary block transition" : "relative hover:text-primary focus:text-primary  block transition"}
          >
            Voucher
          </Link> */}
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <Link
            href="/wishlist"
            className={currParam?.includes('wishlist') ? "relative text-primary font-medium block transition" : "relative hover:text-primary focus:text-primary font-medium block transition"}
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            My Wishlist
          </Link>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <Link
            href="/dashboard"
            className="relative hover:text-primary focus:text-primary  block font-medium transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            My Stores
          </Link>
        </div>
        {/* <div className="space-y-1 pl-8 pt-4">
          <div
            onClick={handleClick}
            className="relative hover:text-primary focus:text-primary  block font-medium transition cursor-pointer"
          >
            <span className="absolute -left-8 top-0 text-base">
              <PersonOutlineIcon />
            </span>
            My stores
            {open ? <ExpandLess /> : <ExpandMore />}{" "}
          </div>
          <div className="text-[#888] text-sm">
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div className="pl-2">
                {stores && stores.data.length > 0 ? (
                  stores?.data?.map((item) => {
                    return (
                      <Link
                        to=""
                        key={item?.id}
                        onClick={() => handleStoreId(item?.id)}
                        className="space-y-2"
                      >
                        <li className="hover:text-primary list-none">
                          <PersonOutlineIcon />
                          <span>{item?.brand_name}</span>
                        </li>
                      </Link>
                    );
                  })
                ) : (
                  <Link to="/create-store">Create store</Link>
                )}
              </div>
            </Collapse>
          </div>
        </div> */}
        <div className="space-y-1 pl-8 pt-4">
          <p
            onClick={signoutHandler}
            className="relative hover:text-primary focus:text-primary  block font-medium transition cursor-pointer"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            Logout
          </p>
        </div>
      </div>
      {showNav && (
        // <SideBarModal modalHandler={handleProfileNav}>
        //   <ProfileModal modalHandler={handleProfileNav} />
        // </SideBarModal>
        ''
      )}
    </div>
  );
};

export default ProfileSideNav;
