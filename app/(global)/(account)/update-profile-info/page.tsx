"use client";

// import { useNavigate, useLocation } from "react-router-dom";
// import { useFormik } from "formik";
// import InputField from "./InputField";
// import { useDispatch } from "react-redux";
// import { UpdateProfileInfoSchema } from "../utilities/schemas";
// import { updateProfileInfo } from "../actions/userActions";

import { useRouter } from "next/navigation";

const UpdateUserProfileForm = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const dispatch = useDispatch();
    const router = useRouter();

    const navigateUrl = () => {
        router.push('/profile-info');
    }
    // const initialValues = {
    //     first_name: `${location?.state?.userInfo?.data?.first_name}`,
    //     last_name: `${location?.state?.userInfo?.data?.last_name}`,
    //     email: `${location?.state?.userInfo?.data?.email}`,
    // };

    // const updateProfileInfoHandler = (data) => {
    //     dispatch(updateProfileInfo(
    //         {
    //             first_name: data?.first_name,
    //             last_name: data?.last_name,
    //             email: data?.email,
    //         }
    //     )).then(() => { navigateUrl(); });
    // };
    // const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    //     initialValues,
    //     validationSchema: UpdateProfileInfoSchema,
    //     onSubmit: (data) => updateProfileInfoHandler(data),
    //     enableReinitialize: true,
    // });
    return (
        <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
            <p className="text-lg font-medium capitalize mb-4">Edit your Profile Information</p>
            <div className="space-y-4">
                {/* <div className="grid md:grid-cols-2 gap-4">
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
                            label="Email"
                            id="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange("email")}
                            errorMsg={touched.email ? errors.email : undefined}
                            placeholder="Enter Email"
                        />
                    </div>
                </div> */}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-primary border border-primary text-white px-12 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
                        // onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UpdateUserProfileForm;