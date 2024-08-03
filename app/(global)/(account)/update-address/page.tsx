"use client";

import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateUserAddress, userAddressList } from "../../actions/userActions";
// import { useFormik } from "formik";
// import InputField from "../InputField";
// import { UpdateAddressSchema } from "../../utilities/schemas";            
import { useRouter } from "next/navigation";

const UpdateUserAddressForm = () => {
    const navigate = useRouter();
    // const { search } = useLocation();
    // const location = useLocation();
    // const redirectInUrl = new URLSearchParams(search).get("redirect");
    // const redirect = redirectInUrl ? redirectInUrl : "/account/manage-address";
    // const userData = useSelector((state) => state?.updateUserAddress);
    // const { userAddress } = userData;
    // const dispatch = useDispatch();

    const navigateUrl = () => {
        navigate.push('/account/manage-address');
    }

    // const initialValues = {
    //     first_name: `${location.state.address.first_name}`,
    //     last_name: `${location.state.address.last_name}`,
    //     email: `${location.state.address.email}`,
    //     state: `${location.state.address.state}`,
    //     city: `${location.state.address.city}`,
    //     street: `${location.state.address.street}`,
    //     phone_number: `${location.state.address.phone_number}`,
    //     alternative_phone_number: `${location.state.address.alternative_phone_number}`,
    //     additional_information: `${location.state.address.additional_information}`,
    // };

    // const updateAddressHandler = (data) => {
    //     dispatch(updateUserAddress(
    //         {
    //             first_name: data?.first_name,
    //             last_name: data?.last_name,
    //             email: data?.email,
    //             state: data?.state,
    //             city: data?.city,
    //             street: data?.street,
    //             phone_number: data?.phone_number,
    //             alternative_phone_number: data?.alternative_phone_number,
    //             additional_information: data?.additional_information,
    //             address_id: location.state.address.id
    //         }
    //     )).then(() => {
    //         dispatch(userAddressList());
    //         navigateUrl();
    //     })
    // };

    // useEffect(() => {
    //     if (userAddress) {
    //         navigate(redirect);
    //     }
    // }, [dispatch, redirect, userAddress, navigate]);

    // const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    //     initialValues,
    //     validationSchema: UpdateAddressSchema,
    //     onSubmit: (data) => updateAddressHandler(data),
    //     enableReinitialize: true,
    // });

    return (
        <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
            <p className="text-lg font-medium capitalize mb-4">Edit Address</p>
            {/* <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <InputField
                            label="First name"
                            id="first_name"
                            type="text"
                            value={values.first_name}
                            onChange={handleChange("first_name")}
                            errorMsg={touched.first_name ? errors.first_name : undefined}
                            placeholder="Enter first name"
                        />
                    </div>
                    <div>
                        <InputField
                            label="Last name"
                            id="last_name"
                            type="text"
                            value={values.last_name}
                            onChange={handleChange("last_name")}
                            errorMsg={touched.last_name ? errors.last_name : undefined}
                            placeholder="Enter last name"
                        />
                    </div>
                    <div>
                        <InputField
                            label="Phone Number"
                            id="phone_number"
                            type="number"
                            value={values.phone_number}
                            onChange={handleChange("phone_number")}
                            errorMsg={touched.phone_number ? errors.phone_number : undefined}
                            placeholder="Enter Number"
                        />
                    </div>
                    <div>
                        <InputField
                            label="Alternative Phone Number"
                            id="alternative_phone_number"
                            type="number"
                            value={values.alternative_phone_number}
                            onChange={handleChange("alternative_phone_number")}
                            errorMsg={touched.alternative_phone_number ? errors.alternative_phone_number : undefined}
                            placeholder="Enter alternative phone number"
                        />
                    </div>
                    <div>
                        <InputField
                            label="Email"
                            id="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange("email")}
                            errorMsg={touched.email ? errors.email : undefined}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div>
                        <InputField
                            label="State"
                            id="state"
                            type="text"
                            value={values.state}
                            onChange={handleChange("state")}
                            errorMsg={touched.state ? errors.state : undefined}
                            placeholder="Enter State"
                        />
                    </div>
                    <div>
                        <InputField
                            label="City"
                            id="city"
                            type="text"
                            value={values.city}
                            onChange={handleChange("city")}
                            errorMsg={touched.city ? errors.city : undefined}
                            placeholder="Enter City"
                        />
                    </div>
                </div>

                <div>
                    <InputField
                        label="Street"
                        id="street"
                        type="text"
                        value={values.street}
                        onChange={handleChange("street")}
                        errorMsg={touched.street ? errors.street : undefined}
                        placeholder="Enter Street"
                    />
                </div>
                <div>
                    <InputField
                        label="Additional Information"
                        id="additional_information"
                        type="text"
                        value={values.additional_information}
                        onChange={handleChange("additional_information")}
                        errorMsg={touched.additional_information ? errors.additional_information : undefined}
                        placeholder="Enter additional information"
                    />
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-primary border border-primary text-white px-12 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div> */}
        </div>
    );
}

export default UpdateUserAddressForm;