import ProfileCard from "@/components/molecules/cards/profileCard";
import React, { useEffect } from "react";
// import { getDefaultAddress, userAddressList } from "../actions/userActions";

// import { useSelector, useDispatch } from "react-redux";

const ManageAccount = () => {
//   const signinData = useSelector((state) => state?.userSignin);
//   const { userInfo } = signinData;

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(userAddressList());
//     dispatch(getDefaultAddress());
//   }, [dispatch]);

//   const defaultAddress = useSelector((state) => state?.getDefaultAddress?.defaultAddress?.data);

  return (
    <div className="col-span-12 lg:col-span-9 grid lg:grid-cols-2 gap-4">
      <ProfileCard
        title="Personal Profile"
        // name={`${userInfo?.data.first_name}, ${userInfo?.data.last_name}`}
        // line1={`${userInfo?.data.email}`}
        // line2={`${defaultAddress ? defaultAddress?.phone_number : defaultAddress === null ? 'No Phone Number' : 'Loading Phone Number..'}`}
      />

      <ProfileCard
        title="Shipping Address"
        // name={`${userInfo?.data.first_name} ${userInfo?.data.last_name}`}
        // line1={`${defaultAddress ? defaultAddress?.street : defaultAddress === null ? 'No Default Address' : 'Loading default address..'}`}
        // line2={`${defaultAddress ? defaultAddress?.phone_number : ''}`}
      />
    </div>
  );
};

export default ManageAccount;
